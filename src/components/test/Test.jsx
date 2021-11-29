import { useContext, useEffect } from 'react';

import Card from '../layout/ui/card/Card';
import Button from '../layout/ui/button/Button';
import TestContext from '../store/test-ctx';

import classes from '../layout/ui/button/Button.module.css';
import itmNumClasses from '../layout/ui/text/ItemNum.module.css';
import cardClasses from '../layout/ui/card/Card.module.css';
import ItemNum from '../layout/ui/text/ItemNum';

const Test = (props) => {
  
  const ctx = useContext(TestContext);

  const handleCheck = (e) => {
    ctx.onCheck({
      ...ctx.checked,
      [e.target.name] : e.target.value,
    });
    
    ctx.onSetPercent(Math.floor((ctx.progress/28)*100));
    
    localStorage.setItem(e.target.name, e.target.value);
  }

  useEffect(()=>{
    ctx.onSetProgress(props.count);
  });
  

  return (
            
    <>
      {props.items.map(item => (
      <Card key={item.qitemNo} className={cardClasses.cardTest}>
        <div>
            <ItemNum className={itmNumClasses.itm}>{`{${item.qitemNo}}`}</ItemNum>
          <form onChange={handleCheck}>
            <Button className={classes.btnAnswer}  name={`B${item.qitemNo}`} id={item.answer01+item.answerScore01} checked={localStorage.getItem(`B${[item.qitemNo]}`) === item.answerScore01} value={item.answerScore01}>{item.answer03}</Button>
            <Button className={classes.btnAnswer}  name={`B${item.qitemNo}`} id={item.answer02+item.answerScore02} checked={localStorage.getItem(`B${[item.qitemNo]}`) === item.answerScore02} value={item.answerScore02}>{item.answer04}</Button>
          </form>
        </div>
      </Card>
              )
            )
        }
    </>
  );
}

export default Test;