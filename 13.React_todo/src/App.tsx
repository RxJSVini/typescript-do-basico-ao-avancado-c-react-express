import React,{ useState} from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import styles from "./styles/main.module.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interfaces/ITask";
import { Modal } from "./components/Modal";

const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const deleteTask = (id:number) =>{
    setTaskList(
      taskList.filter(task =>{
        return task.id != id
      })
    )
  }
  return (
    <div>
          <Header/>
            <main className={styles.main}>
              <div>
                <h2>Oque você vai fazer ?</h2>
                <TaskForm 
                    btnText="Criar tarefa" 
                    setTaskList={setTaskList}
                    taskList={taskList}  
                  />

              </div>
              <div>
                <h2>Suas Tarefas:</h2>
                <TaskList taskList={taskList} handleDelete={deleteTask}/>
              </div>
            </main>
          <Footer/>
    </div>
  )
}

export { App };
