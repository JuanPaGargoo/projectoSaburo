import React, { useState, useEffect } from "react";

function IAChatModal({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState([]); // Estado para los mensajes
  const [inputValue, setInputValue] = useState(""); // Estado para el texto del textarea

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300); // Duración de la animación (300ms)
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, inputValue]); // Agrega el mensaje al estado
      setInputValue(""); // Limpia el textarea
    }
  };

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
        className={`w-96 bg-white h-full shadow-lg ia-chat-modal flex flex-col ${
          isClosing ? "closing" : ""
        }`}
      >
        {/* Encabezado */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-bold">IA Chat</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Contenido principal */}
        <div
          className="p-4 flex-grow overflow-y-auto bg-cover bg-center"
          style={{
            backgroundImage: `url('/src/images/doodleArt.png')`,
            backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo blanco con opacidad
            backgroundBlendMode: "overlay", // Mezcla el color con la imagen
          }}
        >
          {/* Contenedor de bienvenida */}
          <div
            className="bg-white border border-cafeAvellana rounded-2xl p-4 inline-block"
            style={{ maxWidth: "80%" }} // Ajusta el ancho del contenedor
          >
            <p>¡Bienvenido al chat de IA!</p>
          </div>

          {/* Mensajes enviados */}
          <div className="mt-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className="bg-cafeAvellana text-white rounded-2xl p-4 mb-2 text-left"
                style={{
                  marginLeft: "auto",
                  maxWidth: "60%", // Contenedor más estrecho
                  height: "auto", // Altura dinámica basada en el contenido
                }}
              >
                {message}
              </div>
            ))}
          </div>
        </div>

        {/* Área de texto y botón de enviar */}
        <div className="p-4 flex items-center border-t bg-white">
          {/* Área de texto */}
          <textarea
            className="flex-grow resize-none border rounded p-2 mr-2"
            placeholder="Escribe tu mensaje..."
            rows="1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
          {/* Botón de enviar */}
          <button
            className="w-12 h-12 bg-cafeAvellana text-white rounded flex items-center justify-center hover:bg-blue-600"
            title="Enviar"
            onClick={handleSendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
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