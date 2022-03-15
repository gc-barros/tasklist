import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import ITask from "../../types/task";
import Overlay from "../Overlay";
import styles from "./ModalEditTask.module.scss";

type Props = {
  fecharModal: () => void;
  editTask: (task: ITask) => void;
  task: ITask;
}

const ModalEditTask = ({fecharModal, editTask, task}: Props) => {

  const [taskName, setTaskName] = useState<string>(task.title || "Untitled");
  const [taskDesc, setTaskDesc] = useState<string>(task.description || "✍");
  const [taskSituation, setTaskSituation] = useState<"uncompleted" | "completed">(
    task.situation || "uncompleted"
  );

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: "uncompleted" | "completed"
  ) => {
    if (newAlignment !== null) {
      setTaskSituation(newAlignment);
    }
  };

  return (
    <div className={styles.container}>
      <Overlay showOverlay={true} onClick={() => fecharModal()} />
      <form
        className={styles.box}
        onSubmit={(e) => {
          e.preventDefault();
          editTask({
            guid: task.guid,
            refId: task.refId,
            title: taskName,
            description: taskDesc,
            situation: taskSituation,
          });
          fecharModal();
        }}
      >
        <h3>Editar tarefa</h3>
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
          required
          className={styles.input}
          helperText={`${1024 - taskDesc.length} caracteres restantes`}
          value={taskDesc}
          onChange={(e) => {
            if (e.target.value.length <= 1024 && e.target.value !== " ") {
              setTaskDesc(e.target.value);
            }
          }}
        />
        <ToggleButtonGroup
          value={taskSituation}
          exclusive
          onChange={handleChange}
          fullWidth
          size="small"
          color="standard"
        >
          <ToggleButton value="uncompleted">Em progresso</ToggleButton>
          <ToggleButton value="completed">Concluída</ToggleButton>
        </ToggleButtonGroup>
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

export default ModalEditTask;