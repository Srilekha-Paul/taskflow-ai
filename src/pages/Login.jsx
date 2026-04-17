// const Login = () => {
//   return (
//   <div>
//     <h1>Login</h1>
//     </div>);
// };

// export default Login;


// src/pages/Login.jsx

import { useState } from "preact/hooks";
import { route } from "preact-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy Login
    if (email && password) {
      localStorage.setItem("token", "demo-token");
      route("/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100 px-4">
      <div class="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
        {/* Logo / Heading */}
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold text-slate-800">
            TASKFLOW AI
          </h1>
          <p class="text-gray-500 mt-2 text-sm">
            Smart Project Collaboration Platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} class="space-y-5">

          {/* Email */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              class="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              class="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Remember */}
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#" class="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
       <p class="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
         <span
             onClick={() => route("/register")}
             class="text-blue-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

// export default Login;