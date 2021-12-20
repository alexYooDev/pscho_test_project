import classes from './Header.module.css';
import { Desktop } from '../../viewport/Desktop';
import { Mobile } from '../../viewport/Mobile';

const Header = (props) => {
  return (
    <>
      <Desktop>
        <header>
          <h1 className={classes.title}>{props.children}</h1>
        </header>
      </Desktop>
      <Mobile>
        <header>
          <h1 className={classes.title} style={props.style}>
            {props.children}
          </h1>
        </header>
      </Mobile>
    </>
  );
};

export default Header;
