import { useContext } from 'react';
import classes from './ProgressBar.module.css';
import TestContext from '../../../store/test-ctx';

const ProgressBar = (props) => {
  const ctx = useContext(TestContext);
  return (
    <header>
      <h1>{props.value}</h1>
      <div className={classes.myProgress}>
        <div className={classes.myBar} style={{width:`${ctx.percent <= 100 ? ctx.percent : '100'}%`}}>
          <div className={classes.label}>{`🚣🏾‍♂️${ctx.percent <= 100 ? ctx.percent : '100'}%`}</div>
        </div>
      </div>
    </header>
  );
}

export default ProgressBar;