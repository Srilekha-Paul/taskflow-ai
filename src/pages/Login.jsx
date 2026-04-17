import { useState } from "preact/hooks";
import { route } from "preact-router";
import { loginUser } from "../utils/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = loginUser(email, password);

    if (success) {
      route("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div class="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">

        {/* Heading */}
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-slate-900">
            TASKFLOW AI
          </h1>
          <p class="text-gray-500 mt-2">
            Smart Project Collaboration Platform
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} class="space-y-5">

          {/* Email */}
          <div>
            <label class="block text-sm font-semibold text-slate-800 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              class="w-full px-5 py-4 bg-slate-100 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label class="block text-sm font-semibold text-slate-800 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              class="w-full px-5 py-4 bg-slate-100 rounded-2xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition"
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