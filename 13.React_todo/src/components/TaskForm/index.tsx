import React, { FormEvent, useState, ChangeEvent } from "react";
import { ITask } from "../../interfaces/ITask";
import styles from "./TaskForm.module.css";

interface IProps {
  btnText: string;
  taskList:ITask[];
  setTaskList:React.Dispatch<React.SetStateAction<ITask[]>>;
}

export const TaskForm = ({ btnText , taskList, setTaskList}: IProps) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHander = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);
    const newTask:ITask = {id, title, difficulty}
    setTaskList!([...taskList, newTask]);
    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "title") {
        setTitle(e.target.value);
    } else {
        setDifficulty(Number(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHander} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          placeholder="Titulo"
          name="title"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="text"
          placeholder="Dificuldade da Tarefa"
          name="difficulty"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};
