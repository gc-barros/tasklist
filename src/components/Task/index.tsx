import styles from "./Task.module.scss";
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
import ITask from "../../types/task";

type Props = {
  task: ITask;
  deleteTask: (id: string) => void;
}

const Task = ({task, deleteTask}: Props) => {
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
        <span className={styles.taskName}>{task.title}</span>
        <span className={styles.taskDescription}>{task.description}</span>
        <div className={styles.taskStatus}>
          {task.situation === "completed" ? (
            <MdCheck size={20} />
          ) : (
            <MdOutlineAccessTime size={20} />
          )}
          {task.situation === "completed" ? (
            "Concluída"
          ) : (
            "Em progresso"
          )}
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
          <MenuItem onClick={() => {
            handleClose();
            deleteTask(task.guid);
          }} className={styles.menuPopover}>
            <MdDelete size={20} />
            Remover tarefa
          </MenuItem>
        </Menu>
      </li>
    </>
  );
};

export default Task;
