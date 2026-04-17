import { useState } from "preact/hooks";
import { route } from "preact-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Account Created Successfully!");
    route("/");
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div class="w-full max-w-md bg-white shadow-xl rounded-3xl p-6">

        {/* Heading */}
        <div class="text-center mb-5">
          <h1 class="text-3xl font-bold text-slate-900">
            TASKFLOW AI
          </h1>
          <p class="text-gray-500 mt-1 text-sm">
            Create your account to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} class="space-y-4">

          {/* Full Name */}
          <div>
            <label class="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onInput={(e) => setName(e.target.value)}
              class="w-full px-4 py-3 bg-slate-100 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label class="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              class="w-full px-4 py-3 bg-slate-100 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label class="block text-sm font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              class="w-full px-4 py-3 bg-slate-100 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label class="block text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
              class="w-full px-4 py-3 bg-slate-100 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p class="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => route("/")}
            class="text-blue-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}