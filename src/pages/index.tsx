import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Lottie from "lottie-react";
import tasklistAnimation from "../../public/assets/lottie/tasklist.json";
import Image from "next/image";
import logo from "../../public/assets/img/logo.png";
import { Button, TextField } from "@mui/material";
import {MdChecklist} from 'react-icons/md'

const Home: NextPage = () => {
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
        <form className={styles.form}>
          <div className={styles.intro}>
            <span>Bem-vindo(a) à</span>
            <h1>
              Lista de Tarefas <MdChecklist size={32} color="#0047FF" />
            </h1>
          </div>
          <TextField
            id="filled-basic"
            label="Nome"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="filled-basic"
            label="Sobrenome"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="filled-basic"
            label="Cargo"
            variant="outlined"
            fullWidth
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
        <span>Desenvolvido por mim</span>
      </footer>
    </div>
  );
};

export default Home;
