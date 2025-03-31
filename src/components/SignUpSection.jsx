import { useState } from "react";
import { Button } from "@heroui/react";


function SignUpSection() {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

            <form>
              {/* Campo de Nombre */}
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

              {/* Campo de Email */}
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

              {/* Campo de Contraseña */}
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

              <Button className="bg-cafeCacao text-white px-36 py-2 rounded-full">Sign Up</Button>

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
