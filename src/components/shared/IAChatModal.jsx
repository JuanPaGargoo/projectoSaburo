import React, { useState, useEffect, useRef } from "react";
import { API_ENDPOINTS } from "../../constants/api"; // Importa las constantes de la API
import ChatProductCard from "./ChatProductCard"; // Importa el nuevo componente
import doodleArt from "../../images/doodleArt.png"; // Importa la imagen

function IAChatModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" }, // Mensaje de bienvenida
  ]); // Estado para los mensajes
  const [inputValue, setInputValue] = useState(""); // Estado para el texto del textarea

  const messagesEndRef = useRef(null); // Ref para el final del contenedor de mensajes

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Duración de la animación (300ms)
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage = inputValue;
    setMessages([...messages, { type: "user", text: userMessage }]); // Agrega el mensaje del usuario
    setInputValue(""); // Limpia el textarea

    try {
      const response = await fetch(API_ENDPOINTS.CHATBOT_CHAT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }), // Envía el mensaje en el formato correcto
      });
      const data = await response.json();

      if (data.response) {
        // Caso 1: Solo un mensaje
        setMessages((prev) => [...prev, { type: "bot", text: data.response }]);
      } else if (data.response1 && data.productIds) {
        // Caso 2: Tarjetas de productos y mensaje
        const productResponses = await Promise.all(
          data.productIds.map((id) =>
            fetch(API_ENDPOINTS.PRODUCT_BY_ID(id)).then((res) => res.json())
          )
        );
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: data.response1, products: productResponses }, // Asocia los productos con el mensaje
        ]);
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  // Función para desplazar automáticamente al final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Efecto para desplazarse al final cuando cambian los mensajes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Fondo oscuro */}
      <div
        className="flex-grow bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div
        className={`w-[500px] bg-white h-full shadow-lg ia-chat-modal flex flex-col ${
          isClosing ? "closing" : ""
        }`}
      >
        {/* Encabezado */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold text-cafeCacao">IA Chat</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Contenido principal */}
        <div className="p-4 flex-grow overflow-y-auto">
          {/* Mensajes */}
          <div className="mt-4">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`${
                    message.type === "user"
                      ? "bg-cafeAvellana text-white"
                      : "bg-gray-100 text-cafeCacao"
                  } rounded-2xl p-4 mb-2 whitespace-pre-wrap`}
                >
                  {message.text}
                </div>
                {/* Tarjetas de productos asociadas con el mensaje */}
                {message.products && message.products.length > 0 && (
                  <div className="mt-4 flex gap-4">
                    {message.products.map((product, productIndex) => (
                      <ChatProductCard key={productIndex} product={product} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Ref para el final del contenedor */}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Área de texto y botón de enviar */}
        <div className="p-4 flex items-center border-t">
          <textarea
            className="flex-grow resize-none border rounded p-2 mr-2 text-cafeCacao focus:border-cafeAvellana "
            placeholder="Escribe tu mensaje..."
            rows="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Evita el salto de línea
                handleSendMessage(); // Envía el mensaje
              }
            }}
          ></textarea>
          <button
            className="w-12 h-12 bg-cafeAvellana text-white rounded flex items-center justify-center"
            onClick={handleSendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default IAChatModal;