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
  const [taskToUpdate, setTasktoUpdate] = useState<ITask | null>(null);
  
  const deleteTask = (id:number) =>{
    setTaskList(
      taskList.filter(task =>{
        return task.id != id
      })
    )
  };

  const hideOrShowModal = (display:boolean) =>{
    const modal = document.querySelector('#modal');
    if(display){
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add("hide");
    }
  }

  const editTask = (task:ITask):void =>{
    hideOrShowModal(true);
    setTasktoUpdate(task);
  }

  return (
    <div>
        <Modal children={<TaskForm btnText="Editar tarefa" taskList={taskList} task={taskToUpdate}/>}/>
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
                <TaskList 
                    taskList={taskList} 
                    handleDelete={deleteTask}
                    handleEdit={editTask}
                />
              </div>
            </main>
          <Footer/>
    </div>
  )
}

export { App };
