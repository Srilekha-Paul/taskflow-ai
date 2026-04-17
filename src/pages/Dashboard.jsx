// export default Dashboard;

// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// export default function Dashboard() {
//   return (
//     <div class="flex">
//       <Sidebar />

//       <div class="flex-1 bg-slate-100 min-h-screen">
//         <Navbar />

//         <div class="p-6">
//           <h1 class="text-3xl font-bold mb-4">Welcome to TASKFLOW AI</h1>
//           <p>Manage projects and tasks here.</p>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "preact/hooks";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import TaskCard from "../components/TaskCard";
// import TaskModal from "../components/TaskModal";

import { useState, useEffect } from "preact/hooks";
import { route } from "preact-router";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (task) => {
    setEditData(task);
    setShowModal(true);
  };

  const moveTask = (id, direction) => {
    const updated = tasks.map((task) => {
      if (task.id !== id) return task;

      if (direction === "next") {
        if (task.status === "todo") task.status = "progress";
        else if (task.status === "progress") task.status = "done";
      }

      if (direction === "back") {
        if (task.status === "done") task.status = "progress";
        else if (task.status === "progress") task.status = "todo";
      }

      return task;
    });

    setTasks([...updated]);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || task.priority === filter;

    return matchSearch && matchFilter;
  });

  const renderTasks = (status) =>
    filteredTasks
      .filter((task) => task.status === status)
      .map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          moveTask={moveTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ));

  return (
    <div class="flex">
      <Sidebar />

      <div class="flex-1 bg-slate-100 min-h-screen">
        <Navbar />

        <div class="p-6">

          <div class="grid md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white p-4 rounded-2xl shadow">
              Total: {tasks.length}
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              Done: {tasks.filter(t => t.status==="done").length}
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              Pending: {tasks.filter(t => t.status!=="done").length}
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              High: {tasks.filter(t => t.priority==="High").length}
            </div>
          </div>

          <div class="flex gap-4 mb-6">

            <input
              placeholder="Search task..."
              class="flex-1 p-3 rounded-xl border"
              onInput={(e) => setSearch(e.target.value)}
            />

            <select
              class="p-3 rounded-xl border"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <button
              onClick={() => {
                setEditData(null);
                setShowModal(true);
              }}
              class="bg-blue-600 text-white px-5 rounded-xl"
            >
              + Task
            </button>

          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div>
              <h2 class="font-bold mb-3">To Do</h2>
              {renderTasks("todo")}
            </div>

            <div>
              <h2 class="font-bold mb-3">In Progress</h2>
              {renderTasks("progress")}
            </div>

            <div>
              <h2 class="font-bold mb-3">Done</h2>
              {renderTasks("done")}
            </div>
          </div>

        </div>
      </div>

      {showModal && (
        <TaskModal
          onClose={() => setShowModal(false)}
          addTask={addTask}
          editData={editData}
          updateTask={updateTask}
        />
      )}
    </div>
  
  );
}