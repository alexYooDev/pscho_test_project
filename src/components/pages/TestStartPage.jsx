import Example from "../test/Example";
import classes from './page.module.css';

const TestStartPage = () => {

  return (
    <section className={classes.wrapper}>
      <Example/>
    </section>
  );
}

export default TestStartPage;