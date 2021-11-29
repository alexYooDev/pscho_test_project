import classes from "./Modal.module.css";

const Modal = (props) => {
  const handleConfirm = () => {
    props.onConfirm();
  };

  return (
    <div className={classes.modal}>
      <p>{props.message}</p>
      <button className={classes.btnConfirm} onClick={handleConfirm}>
        확인
      </button>
    </div>
  );
};

export default Modal;
