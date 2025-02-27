import React, { useState } from "react";
import { ITask } from "../../interfaces/ITask";
import styles from "./TaskList.module.css";
interface IProps {
  taskList: ITask[];
  handleDelete(id?: number): void;
  handleEdit(task:ITask):void;
}

export const TaskList = ({ taskList, handleDelete, handleEdit }: IProps) => {  
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};
