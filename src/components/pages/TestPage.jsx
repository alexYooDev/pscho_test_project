import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import Test from "../test/Test";
import ProgressBar from "../layout/ui/progressBar/ProgressBar";
import Header from "../layout/ui/header/Header";
import Footer from "../layout/ui/footer/Footer";
import Loading from "../loading/Loading";
import Modal from "../modal/Modal";
import Backdrop from "../modal/Backdrop";
import Card from "../layout/ui/card/Card";

import ModalContext from "../store/modal-ctx";
import TestContext from "../store/test-ctx";

import cardClasses from '../layout/ui/card/Card.module.css';
import footerClasses from "../layout/ui/footer/Footer.module.css";
import btnClasses from "../layout/ui/button/Button.module.css";

const TestPage = () => {
  const history = useHistory();
  const ctx = useContext(TestContext);
  const modalCtx = useContext(ModalContext);

  const [count, setCount] = useState(0);

  const handleToExample = () => {
    history.goBack();
  };

  const handleToPrevPage = () => {
    ctx.onSetCurPage(ctx.curPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let checkedArr = Object.entries(ctx.checked);
  let checkedLength = checkedArr.length;
  let itemCount = ctx.curPage < 6 ? ctx.curPage*5 : ctx.curPage+22;
  let enableNext = checkedLength >= itemCount;

  const lastIdx = ctx.curPage * ctx.itemsPerPage;
  const firstIdx = lastIdx - ctx.itemsPerPage;

  function curItems(data) {
    let curItems = 0;
    curItems = data.slice(firstIdx, lastIdx);
    return curItems;
  }

  const handleSubmit = (e) => {
    ctx.onSetNow((prev)=>{
      return prev + 1
    })
    ctx.onSetCurPage(ctx.curPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleComplete = () => {
      history.push('/test-end');
      ctx.onSetAList(ctx.checked);
  }


  useEffect(()=>{
    setCount(Object.keys(ctx.checked).length+1);
  },[ctx.checked])

  if (ctx.data.length === 0) {
    return <Loading />;
  }

  return (
    <Card className={cardClasses.testWrapper}>
      <ProgressBar />
      <Header>{ctx.data[0].question}</Header>
      <Test items={curItems(ctx.data)} count={count}/>
      <Footer className={footerClasses.footer}>
        {ctx.curPage === 1 ? (
          <button className={btnClasses.btnPrev} onClick={handleToExample}>
            <span style={{ fontWeight: "bold" }}>뒤로</span>
          </button>
        ) : (
          <button
            className={btnClasses.btnPrev}
            onClick={handleToPrevPage}
          >
            <span style={{ fontWeight: "bold" }}>이전</span>
          </button>
        )}
        {ctx.curPage === 6 ? (
          <button className={btnClasses.btnNext} onClick={handleComplete} disabled={!enableNext}>
            <span style={{ fontWeight: "bold" }}>종료</span>
          </button>
        ) : (
          <button className={btnClasses.btnNext} onClick={handleSubmit} disabled={!enableNext}>
            <span style={{ fontWeight: "bold" }}>다음</span>
          </button>
        )}
      </Footer>
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

export default TestPage;
