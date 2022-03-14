import { Button, TextField } from "@mui/material";
import Overlay from "../Overlay";
import styles from "./ModalCreateTask.module.scss";

type Props = {
  fecharModal: () => void;
}

const ModalCreateTask = ({fecharModal}: Props) => {

  return (
    <div className={styles.container}>
      <Overlay showOverlay={true} onClick={() => fecharModal()} />
      <form className={styles.box}>
        <h3>Criar tarefa</h3>
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