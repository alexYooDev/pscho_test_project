import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  
  return (
    <div className={classes.Backdrop} onClick={props.onConfirm}></div>
  );
}

export default Backdrop;