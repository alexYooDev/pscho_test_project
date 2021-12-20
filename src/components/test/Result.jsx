import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import TestContext from '../store/test-ctx';
import UserContext from '../store/user-ctx';
import Card from '../layout/ui/card/Card';
import Header from '../layout/ui/header/Header';
import SubText from '../layout/ui/text/SubText';
import Table from '../layout/ui/table/Table';
import Highlight from '../layout/ui/text/Hightligtht';
import Chart from '../layout/ui/chart/Chart';
import { Mobile } from '../layout/viewport/Mobile';
import { Desktop } from '../layout/viewport/Desktop';

import btnClasses from '../layout/ui/button/Button.module.css';
import cardClasses from '../layout/ui/card/Card.module.css';
import txtClasses from '../layout/ui/text/Highlight.module.css';

const Result = (props) => {
  const history = useHistory();
  const ctx = useContext(TestContext);
  const usrCtx = useContext(UserContext);

  const handleRestart = () => {
    localStorage.clear();

    ctx.onSetResult([]);
    ctx.onSetAList([]);
    usrCtx.onSetName('');
    usrCtx.onSelectGender('');
    ctx.onSelect('');
    ctx.onSetExampleDone(0);
    ctx.onSetPercent(0);
    ctx.onSetCurPage(1);
    ctx.onSetItemPerPage(5);
    ctx.onCheck({});
    ctx.onSetNow(1);
    ctx.onSetProgress(0);
    ctx.onSetJobs([]);
    ctx.onSetMajors([]);

    history.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Card className={cardClasses.cardResult} style={{ width: '22.5rem' }}>
      <Card
        className={cardClasses.cardChart}
        style={{ width: '20rem', padding: 0 }}
      >
        <Header>1. 직업가치관 결과</Header>
        <SubText>
          이름:{' '}
          <Highlight className={txtClasses.highlight}>
            {usrCtx.userName}
          </Highlight>
        </SubText>
        <SubText>
          성별:{' '}
          <Highlight className={txtClasses.highlight}>
            {usrCtx.userGender}
          </Highlight>
        </SubText>
        <SubText>
          검사일:{' '}
          <Highlight className={txtClasses.highlight}>
            {new Date().toLocaleDateString('kor')}
          </Highlight>
        </SubText>
      </Card>
      <Chart />
      <Table />
      <Mobile>
        <button
          className={btnClasses.btnResult}
          onClick={handleRestart}
          style={{ width: '8rem', padding: '0.75rem 1rem' }}
        >
          재검사하기
        </button>
      </Mobile>
      <Desktop>
        <button className={btnClasses.btnResult} onClick={handleRestart}>
          재검사하기
        </button>
      </Desktop>
    </Card>
  );
};

export default Result;
