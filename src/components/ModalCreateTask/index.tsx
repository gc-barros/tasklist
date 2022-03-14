import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Overlay from "../Overlay";
import styles from "./ModalCreateTask.module.scss";

type Props = {
  fecharModal: () => void;
  addTask: (name: string, description: string) => void;
};

const ModalCreateTask = ({fecharModal, addTask}: Props) => {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');

  return (
    <div className={styles.container}>
      <Overlay showOverlay={true} onClick={() => fecharModal()} />
      <form className={styles.box} onSubmit={(e) => {
        e.preventDefault();
        addTask(taskName, taskDesc);
        fecharModal();
      }}>
        <h3>Criar tarefa</h3>
        <TextField
          label="Nome da tarefa"
          variant="outlined"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <TextField
          label="Descrição da tarefa"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          className={styles.input}
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
        />
        <div className={styles.buttons}>
          <Button variant="text" onClick={() => fecharModal()}>
            Cancelar
          </Button>
          <Button variant="text" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ModalCreateTask;