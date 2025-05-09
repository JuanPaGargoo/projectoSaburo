import { useState, useEffect } from "react";
import { Button, Alert } from "@heroui/react"; // Importamos Alert
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

function SignUpSection() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alert, setAlert] = useState({ visible: false, message: "", type: "", variant: "faded" }); // Estado para la alerta

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ visible: true, message: "Las contraseñas no coinciden.", type: "error", variant: "faded" });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/users/register", {
        name,
        email,
        password,
      });

      setAlert({ visible: true, message: "Usuario registrado correctamente 🎉", type: "success", variant: "faded" });

      // Limpiar formulario
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al conectar con el servidor";
      setAlert({ visible: true, message: errorMessage, type: "error", variant: "faded" });
      console.error(error);
    }
  };

  // Ocultar la alerta automáticamente después de 3 segundos
  useEffect(() => {
    if (alert.visible) {
      const timer = setTimeout(() => {
        setAlert({ visible: false, message: "", type: "", variant: "faded" });
      }, 2000);

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [alert.visible]);

  return (
    <div className="flex min-h-[calc(100vh-4.1rem)] items-center justify-center bg-gray-100 pt-5 overflow-hidden relative">
      {/* Mostrar alerta si está visible */}
      {alert.visible && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50">
          <Alert
            color={alert.type === "success" ? "success" : "danger"}
            description={alert.message}
            isVisible={alert.visible}
            title={alert.type === "success" ? "¡Éxito!" : "Error"}
            variant={alert.variant}
           
          />
        </div>
      )}

      <div className="flex w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-2xl overflow-hidden mx-auto">
        {/* Left Side */}
        <div className="w-2/4 flex flex-col items-center justify-center bg-gradient-to-br from-cafeAvellana to-cafeCacao">
          <h1 className="text-white text-5xl font-bold max-w-56 text-center">
            Create Your Account!
          </h1> 
        </div>

        {/* Right Side */}
        <div className="w-3/5 flex items-center justify-center bg-transparent">
          <div className="w-96 p-4">
            <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
            <p className="text-gray-500 mb-6">Create your account to get started.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-1">
                <label className="block text-gray-600 text-sm mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafeCacao"
                  placeholder="Confirm your password"
                />
              </div>

              <Button type="submit" className="bg-cafeCacao text-white px-36 py-2 rounded-full">
                Sign Up
              </Button>

              <p className="text-center text-gray-600 text-sm mt-4">
                Already have an account? <a href="/login" className="text-cafeCacao hover:underline">Login</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;