import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function App() {
  // TASK 1: store the tasks using useState (each task has id, title, category)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React assignment", category: "Study" },
    { id: 2, title: "Prepare for quiz", category: "Exam" },
    { id: 3, title: "Attend society meeting", category: "Society" },
  ]);

  // These two states store what the user types in the input boxes
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  // TASK 4: useEffect runs every time the tasks list changes
  useEffect(() => {
    console.log("Task list updated!");
    console.log("Total tasks: " + tasks.length);
  }, [tasks]);

  // TASK 3: this function runs when the "Add Task" button is clicked
  function addTask() {
    if (title === "" || category === "") {
      return; // do nothing if a box is empty
    }

    const newTask = {
      id: tasks.length + 1,
      title: title,
      category: category,
    };

    setTasks([...tasks, newTask]); // old tasks + the new task
    setTitle("");
    setCategory("");
  }

  return (
    <div className="app">
      <h1>Campus Task Board</h1>

      {/* TASK 3: input fields and Add Task button */}
      <div className="form">
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <p>Total tasks: {tasks.length}</p>

      {/* TASK 1 + 2: show every task using map(), with a unique key,
          and pass the data to the TaskCard component using props */}
      {tasks.map((task) => (
        <TaskCard key={task.id} title={task.title} category={task.category} />
      ))}
    </div>
  );
}

export default App;
