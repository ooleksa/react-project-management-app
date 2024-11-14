import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTaskTitle, setEnteredTaskTitle] = useState("");

  function handleChange(event) {
    setEnteredTaskTitle(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTaskTitle);
    setEnteredTaskTitle("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        value={enteredTaskTitle}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
