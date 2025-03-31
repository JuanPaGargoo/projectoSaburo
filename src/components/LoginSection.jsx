import { useState } from "react";
import { Button } from "@heroui/react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Importa el contexto
import users from "../data/users.json"; // Importa el archivo JSON

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // Estado para manejar errores
  const { setUser } = useAuth(); // Obtén la función para actualizar el usuario
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Busca al usuario en el archivo JSON
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setUser(user); // Actualiza el usuario en el contexto
      navigate("/"); // Redirige a la página principal
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4.1rem)] items-center justify-center bg-gray-100 pt-5 overflow-hidden">
      <div className="flex w-full max-w-4xl h-3/4 bg-white rounded-lg shadow-2xl overflow-hidden mx-auto">
        {/* Left Side */}
        <div className="w-2/4 flex flex-col items-center justify-center bg-gradient-to-br from-cafeAvellana to-cafeCacao">
          <h1 className="text-white text-5xl font-bold max-w-56 text-center">
            Welcome Back!
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-3/5 flex items-center justify-center bg-transparent">
          <div className="w-96 p-8">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <p className="text-gray-500 mb-6">
              Welcome back! Please login to your account.
            </p>

            <form onSubmit={handleLogin}>
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

              <div className="flex items-center justify-between mb-10 mt-10">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="mr-2"
                  />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-cafeCacao hover:underline">
                  Forgot Password?
                </a>
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-4">{error}</p>
              )}

              <Button
                type="submit"
                className="bg-cafeCacao text-white px-36 py-2 rounded-full"
              >
                Login
              </Button>

              <p className="text-center text-gray-600 text-sm mt-4">
                New User?{" "}
                <Link to="/signup" className="text-cafeCacao hover:underline">
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSection;
