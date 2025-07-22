import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  function handleDelete(indexToRemove) {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={task.text + index}
          text={task.text}
          category={task.category}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;