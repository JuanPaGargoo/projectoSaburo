import { useState } from "react";
import {Button, ButtonGroup} from "@heroui/react";

function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex h-screen">
        {/* Left Side */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-cafeCacao to-orange-300">
        <h1 className="text-white text-7xl font-bold max-w-56 mr-52">Welcome Back!</h1>
      </div>

        {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        <div className="w-96 p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="text-gray-500 mb-6">Welcome back! Please login to your account.</p>

          <form>
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">User Name</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder=""
              />
            </div>

            <div className="flex items-center justify-between mb-4">
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

            <Button className="bg-cafeCacao text-white px-36 py-2 rounded-full">Login</Button>

            <p className="text-center text-gray-600 text-sm mt-4">
              New User? <a href="#" className="text-cafeCacao hover:underline">Signup</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
export default LoginSection;