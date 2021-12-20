import { Desktop } from '../../viewport/Desktop';
import { Mobile } from '../../viewport/Mobile';

const Card = (props) => {
  return (
    <>
      <Desktop>
        <div className={props.className}>
          <section>{props.children}</section>
        </div>
      </Desktop>
      <Mobile>
        <div className={props.className} style={props.style}>
          <section>{props.children}</section>
        </div>
      </Mobile>
    </>
  );
};

export default Card;
