import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Overlay from "../Overlay";
import styles from "./ModalCreateTask.module.scss";

type Props = {
  fecharModal: () => void;
  addTask: (name: string, description: string) => void;
};

const ModalCreateTask = ({fecharModal, addTask}: Props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  return (
    <div className={styles.container}>
      <Overlay showOverlay={true} onClick={() => fecharModal()} />
      <form
        className={styles.box}
        onSubmit={(e) => {
          e.preventDefault();
          addTask(taskName, taskDesc);
          fecharModal();
        }}
      >
        <h3>Criar tarefa</h3>
        <TextField
          label="Nome da tarefa"
          variant="outlined"
          fullWidth
          required
          helperText={`${100 - taskName.length} caracteres restantes`}
          value={taskName}
          onChange={(e) => {
            if (e.target.value.length <= 100 && e.target.value !== " ") {
              setTaskName(e.target.value);
            }
          }}
        />
        <TextField
          label="Descrição da tarefa"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          className={styles.input}
          helperText={`${1024 - taskDesc.length} caracteres restantes`}
          value={taskDesc}
          onChange={(e) => {
            if (e.target.value.length <= 1024 && e.target.value !== " ") {
              setTaskDesc(e.target.value);
            }
          }}
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