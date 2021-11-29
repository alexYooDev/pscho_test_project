import classes from './SubText.module.css';

const SubText = props => {
  return <h4 className={classes.subtext}>{props.children}</h4>
}

export default SubText;