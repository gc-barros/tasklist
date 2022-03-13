import styles from './lateralMenu.module.scss';
import Image from "next/image";
import { MdInfo, MdOutlineMenu } from "react-icons/md";
import { Avatar } from "@mui/material";
import { useState } from 'react';

const LateralMenu = () => {

  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <button className={styles.hamburgerMenu} onClick={() => handleShowMenu()}>
        <MdOutlineMenu size={40} />
      </button>

      <div className={`${styles.overlay} ${showMenu ? styles["overlay__ativo"] : ''}`} onClick={() => handleShowMenu()}></div>

        <aside
          className={`${styles.lateralMenu} ${
            showMenu ? styles["lateralMenu__ativo"] : ''
          }`}
          id="lateralMenu"
        >
          <div className={styles.userInfo}>
            <Avatar sx={{ bgcolor: "#FFF", color: "#00F" }}>GB</Avatar>
            <div className={styles.userDados}>
              <span>Nome</span>
              <span>Função</span>
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
            </ul>
          </nav>
        </aside>
    </>
  );
}

export default LateralMenu;