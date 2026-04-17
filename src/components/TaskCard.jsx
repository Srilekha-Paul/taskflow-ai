export default function TaskCard({
  task,
  moveTask,
  deleteTask,
  editTask,
}) {
  const priorityColor =
    task.priority === "High"
      ? "bg-red-100 text-red-600"
      : task.priority === "Medium"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-green-100 text-green-700";

  return (
    <div class="bg-white rounded-2xl shadow p-4 mb-4">
      <h3 class="font-bold text-lg">{task.title}</h3>

      <div class="flex justify-between mt-3 items-center">
        <span class={`text-xs px-3 py-1 rounded-full ${priorityColor}`}>
          {task.priority}
        </span>

        <span class="text-sm text-gray-500">
          {task.deadline}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2 mt-4">

        {task.status !== "todo" && (
          <button
            onClick={() => moveTask(task.id, "back")}
            class="bg-gray-200 py-2 rounded-xl text-sm"
          >
            ← Back
          </button>
        )}

        {task.status !== "done" && (
          <button
            onClick={() => moveTask(task.id, "next")}
            class="bg-blue-600 text-white py-2 rounded-xl text-sm"
          >
            Next →
          </button>
        )}

        <button
          onClick={() => editTask(task)}
          class="bg-yellow-400 py-2 rounded-xl text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          class="bg-red-500 text-white py-2 rounded-xl text-sm"
        >
          Delete
        </button>

      </div>
    </div>
  );
}