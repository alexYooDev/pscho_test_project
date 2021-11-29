import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header>
      <h1 className={classes.title}>{props.children}</h1>
    </header>
  );
}

export default Header;