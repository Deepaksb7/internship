"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Edit, LucideTrash2 } from "lucide-react";
import { toast } from "sonner";

interface Task {
  _id: string;
  text: string;
  completed: boolean;
}

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("/api/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const toggleCompleted = async (task: Task) => {
    try {
      const res = await axios.patch(`/api/tasks/${task._id}`, { completed: !task.completed });
      fetchTasks();
      if (res.data.completed){
        toast.success("Task Completed")
      }else{
        toast.success("Task is Incompleted")
      }
    } catch (err) {
      console.error(err);
    }
  };

  const editTask = (task: Task) => {
    setNewTask(task.text); 
    setEditingId(task._id); 
    
  };

  const handleSubmit = async () => {
    if (!newTask.trim()) return;

    try {
      if (editingId) {
        await axios.patch(`/api/tasks/${editingId}`, { text: newTask });
        toast.success("Task Updated")
        setEditingId(null); 
      } else {
        await axios.post("/api/tasks", { text: newTask });
        toast.success("Task Created")
      }

      setNewTask("");
      fetchTasks(); 
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      fetchTasks();
      toast.success("Task Deleted")
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((t) =>
    t.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Task Dashboard</h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Write a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleSubmit}
          className={`px-4 py-2 cursor-pointer rounded ${editingId ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
        >
          {editingId ? "Update" : "Create"}
        </button>
      </div>

      <ul className="space-y-3">
        {filteredTasks.map((task) => (
          <li
            key={task._id}
            className="flex items-center gap-2 border-b pb-2"
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompleted(task)}
              className="cursor-pointer"
            />
            <span
              className={task.completed ? "line-through text-gray-500 flex-1" : "flex-1"}
            >
              {task.text}
            </span>

            <button
              onClick={() => editTask(task)} 
              className="text-blue-500 cursor-pointer"
            >
              <Edit className="size-4" />
            </button>

            <button
              onClick={() => deleteTask(task._id)}
              className="text-red-500 ml-2 cursor-pointer"
            >
              <LucideTrash2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
