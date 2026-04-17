import { route } from "preact-router";
import { logout } from "../utils/auth";

export default function Navbar() {
  const handleLogout = () => {
    logout();
    route("/");
  };

  return (
    <div class="bg-white shadow px-6 py-4 flex justify-between">
      <h2 class="text-xl font-semibold">Dashboard</h2>

      <button
        onClick={handleLogout}
        class="bg-red-500 text-white px-4 py-2 rounded-xl"
      >
        Logout
      </button>
    </div>
  );
}