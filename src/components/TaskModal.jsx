import { useState, useEffect } from "preact/hooks";

export default function TaskModal({
  onClose,
  addTask,
  editData,
  updateTask,
}) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (editData) {
      setTitle(editData.title);
      setPriority(editData.priority);
      setDeadline(editData.deadline);
    }
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editData) {
      updateTask({
        ...editData,
        title,
        priority,
        deadline,
      });
    } else {
      addTask({
        id: Date.now(),
        title,
        priority,
        deadline,
        status: "todo",
      });
    }

    onClose();
  };

  return (
    <div class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div class="bg-white rounded-2xl p-6 w-full max-w-md">

        <h2 class="text-2xl font-bold mb-4">
          {editData ? "Edit Task" : "Create Task"}
        </h2>

        <form onSubmit={handleSubmit} class="space-y-4">

          <input
            type="text"
            placeholder="Task title"
            class="w-full p-3 border rounded-xl"
            value={title}
            onInput={(e) => setTitle(e.target.value)}
            required
          />

          <select
            class="w-full p-3 border rounded-xl"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            type="date"
            class="w-full p-3 border rounded-xl"
            value={deadline}
            onInput={(e) => setDeadline(e.target.value)}
            required
          />

          <div class="grid grid-cols-2 gap-3">
            <button class="bg-blue-600 text-white py-3 rounded-xl">
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
              class="bg-gray-200 py-3 rounded-xl"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}