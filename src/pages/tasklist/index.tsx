import type { NextPage } from "next";
import Head from "next/head";
import LateralMenu from "../../components/LateralMenu";
import styles from "./Tasklist.module.scss";
import { MdSearch, MdAdd } from "react-icons/md";
import Task from "../../components/Task";
import { useEffect, useState } from "react";
import ModalCreateTask from "../../components/ModalCreateTask";
import { useRouter } from "next/router";
import ITask from "../../types/task";
import api from "../../services/api";

const Tasklist: NextPage = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [myTasks, setMyTasks] = useState<ITask[]>([]);

  function addTask(name: string, description: string) {
    api.post("/api/tasks", { title: name, description: description })
    .then(response => setMyTasks(previousList => [...previousList, response.data]))
    .catch(err => console.error("Erro: ", err));
  }

  function deleteTask(id: string) {
    setMyTasks((previousList) =>
      previousList.filter((task) => task.guid !== id)
    );
    api.delete(`/api/tasks/${id}`).then((response) => console.log(response));
  }

  useEffect(() => {
    api
      .get("/api/tasks")
      .then((response) => setMyTasks(response.data))
      .catch((err) => console.error("Erro: ", err));
  }, [setMyTasks]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Tarefas | WLS Soluções</title>
        <meta
          name="description"
          content="Lista de tarefas da WLS Soluções, simplificando a gestão do seu negócio."
        />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

      {showModalCreate && (
        <ModalCreateTask fecharModal={() => setShowModalCreate(false)} addTask={addTask} />
      )}
      <LateralMenu />

      <main className={styles.main}>
        <section className={styles.tasksContainer}>
          <div className={styles.searchInput}>
            <MdSearch size="28" />
            <input type="text" placeholder="Procurar tarefas" />
          </div>

          <h1 className={styles.title}>Tarefas</h1>

          <ul className={styles.tasksList}>
            {myTasks.map((task) => (
              <Task task={task} key={task.guid} deleteTask={deleteTask} />
            ))}
          </ul>

          <button
            className={styles.buttonNewTask}
            onClick={() => setShowModalCreate(true)}
          >
            <MdAdd size={24} />
            Nova tarefa
          </button>
        </section>
      </main>
    </div>
  );
};

export default Tasklist;
