import styles from './LateralMenu.module.scss';
import Image from "next/image";
import { MdInfo, MdLogout, MdOutlineMenu } from "react-icons/md";
import { Avatar } from "@mui/material";
import { useState } from 'react';
import Overlay from '../Overlay';
import { useRouter } from 'next/router';

const LateralMenu = () => {

  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const { name, lastName, role } = router.query;

  let nameF = "Nome", lastNameF = "Sobrenome", roleF = "Função";

  if (
    name  &&
    lastName &&
    role
  ) {
    nameF = decodeURIComponent(name.toString());
    lastNameF = decodeURIComponent(lastName.toString());
    roleF = decodeURIComponent(role.toString());
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <button className={styles.hamburgerMenu} onClick={() => handleShowMenu()}>
        <MdOutlineMenu size={40} />
      </button>

      <Overlay showOverlay={showMenu} onClick={() => handleShowMenu()} />

      <aside
        className={`${styles.lateralMenu} ${
          showMenu ? styles["lateralMenu__ativo"] : ""
        }`}
        id="lateralMenu"
      >
        <div className={styles.userInfo}>
          <Avatar sx={{ bgcolor: "#FFF", color: "#00F" }}>
            {nameF[0].toUpperCase() + lastNameF[0].toUpperCase()}
          </Avatar>
          <div className={styles.userDados}>
            <span>{`${nameF} ${lastNameF[0]}.`}</span>
            <span>{roleF}</span>
          </div>
        </div>
        <nav className={styles.navegacao}>
          <ul>
            <li className={styles.item}>
              <div className={styles.iconContainer}>
                <Image
                  src="/assets/img/clipboard-list.svg"
                  alt="Tarefas"
                  width="24px"
                  height="24px"
                />
              </div>
              Tarefas
            </li>
            <li className={styles.item}>
              <div className={styles.iconContainer}>
                <MdInfo color="#FFF" size="28" />
              </div>
              Sobre
            </li>
            <li className={styles.item} onClick={() => router.push("/")}>
              <div className={styles.iconContainer}>
                <MdLogout color="#FFF" size="28" />
              </div>
              Sair
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default LateralMenu;