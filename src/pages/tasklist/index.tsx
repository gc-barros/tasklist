import type { NextPage } from "next";
import Head from "next/head";
import LateralMenu from "../../components/LateralMenu";
import styles from "./Tasklist.module.scss";
import { MdSearch, MdAdd } from "react-icons/md";
import Task from "../../components/Task";
import { useState } from "react";
import ModalCreateTask from "../../components/ModalCreateTask";

const Tasklist: NextPage = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);

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
        <ModalCreateTask fecharModal={() => setShowModalCreate(false)} />
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
            <Task />
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
