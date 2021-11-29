import classes from './Button.module.css';

const Button = (props) => {
  
  return (
    <div className={props.className}>
      <label
        htmlFor={props.id}
        className={classes.radioBtn}
      >
        <input
          type="radio"
          className={classes.radio}
          name={props.name}
          id={props.id}
          value={props.value}
          defaultChecked={props.checked}
          disabled={props.disabled}
          onClick={props.onClick}
        />
        <span>{props.children}</span>
      </label>
    </div>
  );
};

export default Button;
