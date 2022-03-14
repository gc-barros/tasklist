import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Lottie from "lottie-react";
import tasklistAnimation from "../../public/assets/lottie/tasklist.json";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import { Button, TextField } from "@mui/material";
import { MdChecklist } from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

const Home: NextPage = ({author}: any) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Início | WLS Soluções</title>
        <meta
          name="description"
          content="Lista de tarefas da WLS Soluções, simplificando a gestão do seu negócio."
        />
        <link rel="icon" href="/assets/img/favicon.png" />
      </Head>

      <main className={styles.main}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              `/tasklist?name=${encodeURIComponent(
                name.toLowerCase()
              )}&lastName=${encodeURIComponent(
                lastName.toLowerCase()
              )}&role=${encodeURIComponent(role.toLowerCase())}`
            );
          }}
        >
          <div className={styles.intro}>
            <span>Bem-vindo(a) à</span>
            <h1>
              Lista de Tarefas <MdChecklist size={32} color="#ED6E56" />
            </h1>
            <span>Entre com seus dados:</span>
          </div>
          <TextField
            id="filled-basic"
            label="Nome"
            variant="outlined"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Sobrenome"
            variant="outlined"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            id="filled-basic"
            label="Cargo"
            variant="outlined"
            fullWidth
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <Button type="submit" variant="contained" fullWidth size="large">
            Entrar
          </Button>
        </form>

        <div className={styles.ilustras}>
          <div className={styles.imageContainer}>
            <Image src={logo} alt="Logo da WLS Soluções" />
          </div>
          <Lottie
            animationData={tasklistAnimation}
            loop={true}
            autoplay={true}
            className={styles.lottie}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <span>
          Mady with 🧡 by{" "}
          <a
            href="https://www.barrosdev.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            {author}
          </a>
          .
        </span>
      </footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      author: "Gabriel C. Barros",
    },
  };
};

export default Home;

