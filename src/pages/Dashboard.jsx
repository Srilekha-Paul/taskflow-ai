// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//     </div>
//   );
// };

// export default Dashboard;

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div class="flex">
      <Sidebar />

      <div class="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div class="p-6">
          <h1 class="text-3xl font-bold mb-4">Welcome to TASKFLOW AI</h1>
          <p>Manage projects and tasks here.</p>
        </div>
      </div>
    </div>
  );
}