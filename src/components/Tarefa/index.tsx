import styles from "./Tarefa.module.scss";
import {
  MdCheck,
  MdOutlineAccessTime,
  MdMoreVert,
  MdModeEdit,
  MdDelete,
} from "react-icons/md";
import { IconButton, MenuItem, Menu } from "@mui/material";
import { useState } from "react";
import ModalEditTask from "../ModalEditTask";

const Tarefa = () => {
  const [status, setStatus] = useState("Concluída");
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {showModalEdit && (
        <ModalEditTask fecharModal={() => setShowModalEdit(false)} />
      )}
      <li className={styles.taskBox}>
        <span className={styles.taskName}>Nome</span>
        <span className={styles.taskDescription}>Descrição da tarefa</span>
        <div
          className={styles.taskStatus}
          onClick={() => {
            status === "Concluída"
              ? setStatus("Em progresso")
              : setStatus("Concluída");
          }}
        >
          {status === "Concluída" ? (
            <MdCheck size={20} />
          ) : (
            <MdOutlineAccessTime size={20} />
          )}
          {status}
        </div>

        <IconButton
          aria-label="more"
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MdMoreVert />
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              setShowModalEdit(true);
            }}
            className={styles.menuPopover}
          >
            <MdModeEdit size={20} />
            Atualizar tarefa
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuPopover}>
            <MdDelete size={20} />
            Remover tarefa
          </MenuItem>
        </Menu>
      </li>
    </>
  );
};

export default Tarefa;
