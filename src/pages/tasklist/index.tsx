import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import LateralMenu from "../../components/LateralMenu";
import styles from "./Tasklist.module.scss";
import { MdSearch, MdAdd, MdDelete } from "react-icons/md";
import Task from "../../components/Task";
import { useEffect, useState } from "react";
import ModalCreateTask from "../../components/ModalCreateTask";
import ITask from "../../types/task";
import api from "../../services/api";
import { Button } from "@mui/material";

const Tasklist: NextPage = ({ result }: any) => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [myTasks, setMyTasks] = useState<ITask[]>(result || []);
  const [filteredList, setFilteredList] = useState(myTasks);
  const [search, setSearch] = useState("");

  function filterTasks(busca: string) {
    const newFilter = myTasks.filter((task) =>
      task.title.toLowerCase().includes(busca.toLowerCase())
    );
    setFilteredList(newFilter);
  }

  function addTask(name: string, description: string) {
    api
      .post("/api/tasks", { title: name, description: description })
      .then((response) => {
        console.log(response.data)
        setMyTasks((previousList) => [...previousList, response.data])}
      )
      .catch((error) => console.error("Algo deu errado: ", error));
  }

  function editTask(taskUpdated: ITask) {
    setMyTasks((previousList) =>
      previousList.map((task) => {
        if (task.guid === taskUpdated.guid) {
          return taskUpdated;
        }
        return task;
      })
    );

    api
      .put("/api/tasks", taskUpdated)
      .then((response) => console.log(response))
      .catch((error) => console.error("Algo deu errado: ", error));
  }

  function deleteTask(id: string) {
    setMyTasks((previousList) =>
      previousList.filter((task) => task.guid !== id)
    );
    api
      .delete(`/api/tasks/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.error("Algo deu errado: ", error));
  }

  function clearTaskList() {
    myTasks.forEach((task) => {
      deleteTask(task.guid);
    });

    setMyTasks([]);
  }

  function completeTask(targetTask: ITask) {
    const changedTask = { ...targetTask };

    changedTask.situation === "uncompleted"
      ? (changedTask.situation = "completed")
      : (changedTask.situation = "uncompleted");

    setMyTasks((previousList) =>
      previousList.map((task) => {
        if (task.guid === changedTask.guid) {
          return changedTask;
        }
        return task;
      })
    );

    api
      .put("/api/tasks", changedTask)
      .then((response) => console.log(response))
      .catch((error) => console.error("Algo deu errado: ", error));
  }

  useEffect(() => {
    setFilteredList(myTasks);
    setSearch("");
  }, [myTasks]);

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
        <ModalCreateTask
          fecharModal={() => setShowModalCreate(false)}
          addTask={addTask}
        />
      )}
      <LateralMenu />

      <main className={styles.main}>
        <section className={styles.tasksContainer}>
          <div className={styles.searchInput}>
            <MdSearch size="28" />
            <input
              type="text"
              placeholder="Procurar tarefas"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                filterTasks(e.target.value);
              }}
            />
          </div>

          <div className={styles.titleBlock}>
            <h1 className={styles.title}>Tarefas</h1>
            <Button
              variant="text"
              color="error"
              startIcon={<MdDelete />}
              onClick={() => clearTaskList()}
              title="Excluir todas as tarefas"
            >
              <span className={styles.buttonText}>Limpar tarefas</span>
            </Button>
          </div>

          <ul className={styles.tasksList}>
            {filteredList.map((task) => (
              <Task
                task={task}
                key={task.guid}
                deleteTask={deleteTask}
                editTask={editTask}
                completeTask={completeTask}
              />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await api.get("/api/tasks");
    let data = response.data;
    return {
      props: {
        result: data,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    props: {
      result: [],
    },
  };
};

export default Tasklist;
