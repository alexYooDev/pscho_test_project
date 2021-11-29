
const Card = (props) => {
  return (
    <div className={props.className}>
      <section>
      {props.children}
      </section>
    </div>
  );
}

export default Card;