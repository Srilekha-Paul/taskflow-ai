// export default function Sidebar() {
//   return (
//     <div class="w-64 bg-slate-900 text-white min-h-screen p-5">
//       <h1 class="text-2xl font-bold mb-8">TASKFLOW</h1>

//       <ul class="space-y-4">
//         <li class="hover:text-blue-400 cursor-pointer">Dashboard</li>
//         <li class="hover:text-blue-400 cursor-pointer">Projects</li>
//         <li class="hover:text-blue-400 cursor-pointer">Tasks</li>
//         <li class="hover:text-blue-400 cursor-pointer">Team</li>
//       </ul>
//     </div>
//   );
// }


import { route } from "preact-router";

export default function Sidebar() {
  return (
    <div class="w-72 bg-slate-950 text-white min-h-screen p-5">
      <h1 class="text-4xl font-bold mb-10">TASKFLOW</h1>

      <ul class="space-y-6 text-xl">

        <li
          class="cursor-pointer hover:text-blue-400"
          onClick={() => route("/dashboard")}
        >
          Dashboard
        </li>

        <li
          class="cursor-pointer hover:text-blue-400"
          onClick={() => route("/projects")}
        >
          Projects
        </li>

        <li
          class="cursor-pointer hover:text-blue-400"
          onClick={() => route("/tasks")}
        >
          Tasks
        </li>

        <li
          class="cursor-pointer hover:text-blue-400"
          onClick={() => route("/team")}
        >
          Team
        </li>

      </ul>
    </div>
  );
}