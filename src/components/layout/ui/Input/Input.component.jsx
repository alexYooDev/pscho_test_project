import classes from './Input.module.css';

export const Input = (props) => {
  return (
    <div className={classes.control}>
      <input
        className={props.className}
        type={props.type}
        value={props.value}
        name={props.name}
        autoComplete='off'
        onChange={props.onChange}
        onClick={props.onClick}
      />
      {props.type === 'radio' ? (
        <label htmlFor={props.name}>{props.value}</label>
      ) : (
        ''
      )}
    </div>
  );
};
