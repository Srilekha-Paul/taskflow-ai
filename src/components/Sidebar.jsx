export default function Sidebar() {
  return (
    <div class="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h1 class="text-2xl font-bold mb-8">TASKFLOW</h1>

      <ul class="space-y-4">
        <li class="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li class="hover:text-blue-400 cursor-pointer">Projects</li>
        <li class="hover:text-blue-400 cursor-pointer">Tasks</li>
        <li class="hover:text-blue-400 cursor-pointer">Team</li>
      </ul>
    </div>
  );
}