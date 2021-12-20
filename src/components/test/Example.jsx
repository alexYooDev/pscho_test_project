import React, { useContext } from 'react';
import Card from '../layout/ui/card/Card';
import Button from '../layout/ui/button/Button';
import Loading from '../loading/Loading';
import ProgressBar from '../layout/ui/progressBar/ProgressBar';
import Backdrop from '../modal/Backdrop';
import Modal from '../modal/Modal';
import ItemNum from '../layout/ui/text/ItemNum';

import classes from '../layout/ui/button/Button.module.css';
import cardClasses from '../layout/ui/card/Card.module.css';
import itmNumClasses from '../layout/ui/text/ItemNum.module.css';
import txtClasses from '../layout/ui/text/Highlight.module.css';

import TestContext from '../store/test-ctx';
import ModalContext from '../store/modal-ctx';
import { useHistory } from 'react-router';
import Header from '../layout/ui/header/Header';
import SubText from '../layout/ui/text/SubText';
import Highlight from '../layout/ui/text/Hightligtht';

const Example = () => {
  const history = useHistory();

  const ctx = useContext(TestContext);
  const modalCtx = useContext(ModalContext);

  const handleSelect = (e) => {
    ctx.onSelect(e.target.value);
    ctx.onSetExampleDone(1);
  };

  const handleTestStart = (e) => {
    if (ctx.exampleDone === 0) {
      modalCtx.onSetMessage('예제를 완료해주세요!');
      modalCtx.onSetModal(true);
    } else {
      localStorage.clear();
      history.push('/test');
    }
  };

  if (ctx.data.length === 0) {
    return <Loading />;
  }

  return (
    <Card
      className={cardClasses.cardExample}
      style={{ width: '22rem', height: '33rem', padding: '2rem' }}
    >
      <ProgressBar />
      <Header>테스트에 앞서 먼저 아래 예시 문제를 보고 시도해보세요!</Header>
      <div id={ctx.data[0].id}>
        <SubText>아래 {ctx.data[0].question}</SubText>
        <ItemNum
          className={itmNumClasses.itm}
        >{`{${ctx.data[0].qitemNo}}`}</ItemNum>
        <Button
          className={classes.btnAnswer}
          name={ctx.data[0].qitemNo}
          id={ctx.data[0].answer01 + ctx.data[0].answerScore01}
          value={ctx.data[0].answerScore01}
          onClick={handleSelect}
        >
          <ItemNum className={itmNumClasses.itmEach}>
            {ctx.data[0].answerScore01}.{' '}
          </ItemNum>
          {ctx.data[0].answer03}
        </Button>
        <Button
          className={classes.btnAnswer}
          name={ctx.data[0].qitemNo}
          id={ctx.data[0].answer02 + ctx.data[0].answerScore02}
          value={ctx.data[0].answerScore02}
          onClick={handleSelect}
        >
          <ItemNum className={itmNumClasses.itmEach}>
            {ctx.data[0].answerScore02}.{' '}
          </ItemNum>
          {ctx.data[0].answer04}
        </Button>
      </div>
      <Highlight className={txtClasses.highlight}>
        테스트는 10~15분 정도 소요됩니다.
      </Highlight>
      <button className={classes.btn} onClick={handleTestStart}>
        검사시작
      </button>
      {modalCtx.modalIsOpen && (
        <Backdrop
          onSetMessage={modalCtx.onSetMessage}
          onConfirm={modalCtx.onCloseModal}
        />
      )}
      {modalCtx.modalIsOpen && (
        <Modal message={modalCtx.message} onConfirm={modalCtx.onCloseModal} />
      )}
    </Card>
  );
};

export default Example;
