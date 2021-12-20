import classes from './Button.module.css';
import { Mobile } from '../../viewport/Mobile';
import { Desktop } from '../../viewport/Desktop';

const Button = (props) => {
  return (
    <>
      <Mobile>
        <div className={props.className} style={props.style}>
          <label htmlFor={props.id} className={classes.radioBtn}>
            <input
              type='radio'
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
      </Mobile>
      <Desktop>
        <div className={props.className}>
          <label htmlFor={props.id} className={classes.radioBtn}>
            <input
              type='radio'
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
      </Desktop>
    </>
  );
};

export default Button;
