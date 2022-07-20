import React from "react";
import "./taskList.css";
import { PropTypes } from "prop-types";
import TaskItem from "../taskItem/taskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask,
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}

        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button className="btn" onClick={addTask}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

//informado quais as props do componentes e quais os tipos que ele vai receber
//componente (taksList)
TaskList.prototypes = {
  //props (title): que receera uma props do tipo string e que é obrigatoria
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
