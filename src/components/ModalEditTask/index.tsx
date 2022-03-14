import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import Overlay from "../Overlay";
import styles from "./ModalEditTask.module.scss";

type Props = {
  fecharModal: () => void;
}

const ModalEditTask = ({fecharModal}: Props) => {

  const [alignment, setAlignment] = useState("Em progresso");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={styles.container}>
      <Overlay showOverlay={true} onClick={() => fecharModal()} />
      <form className={styles.box}>
        <h3>Editar tarefa</h3>
        <TextField
          label="Nome da tarefa"
          variant="outlined"
          fullWidth
          error
          helperText="Campo inválido."
        />
        <TextField
          label="Descrição da tarefa"
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          className={styles.input}
        />
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          fullWidth
          size="small"
          color="standard"
        >
          <ToggleButton value="Em progresso">Em progresso</ToggleButton>
          <ToggleButton value="Concluída">Concluída</ToggleButton>
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