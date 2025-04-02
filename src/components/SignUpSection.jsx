import { useState } from "react";
import { Button } from "@heroui/react";
import axios from "axios"; // 👈 importamos axios

function SignUpSection() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name,
        email,
        password,
      });

      alert("Usuario registrado correctamente 🎉");

      // Limpiar formulario
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Error al registrar usuario");
      } else {
        alert("Error al conectar con el servidor");
      }
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4.1rem)] items-center justify-center bg-gray-100 pt-5 overflow-hidden">
      <div className="flex w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-2xl overflow-hidden mx-auto">
        {/* Left Side */}
        <div className="w-2/4 flex flex-col items-center justify-center bg-gradient-to-br from-cafeAvellana to-cafeCacao">
          <h1 className="text-white text-5xl font-bold max-w-56 text-center">
            Create Your Account!
          </h1> 
        </div>

        {/* Right Side */}
        <div className="w-3/5 flex items-center justify-center bg-transparent">
          <div className="w-96 p-8">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
            <p className="text-gray-500 mb-6">Create your account to get started.</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
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
