import styles from './Overlay.module.scss';

type Props = {
  onClick: () => void;
  showOverlay: boolean;
}

const Overlay = ({ onClick, showOverlay }: Props) => {
  return (
    <div
      className={`${styles.overlay} ${
        showOverlay ? styles["overlay__ativo"] : ""
      }`}
      onClick={onClick}
    ></div>
  );
}

export default Overlay;