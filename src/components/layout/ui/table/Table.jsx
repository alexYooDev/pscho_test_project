import { useContext } from 'react';
import Header from '../header/Header';
import Highlight from '../text/Hightligtht';
import TestContext from '../../../store/test-ctx';
import SubText from '../text/SubText';

import classes from './Table.module.css';
import cardClasses from '../card/Card.module.css';
import txtClasses from '../text/Highlight.module.css';
import Card from '../card/Card';
import { Desktop } from '../../viewport/Desktop';
import { Mobile } from '../../viewport/Mobile';

const Table = () => {
  const ctx = useContext(TestContext);

  return (
    <>
      <Mobile>
        <Card
          className={cardClasses.cardTable}
          style={{ width: '22rem', padding: 0 }}
        >
          <Header>2. 나의 가치관과 관련이 높은 직업</Header>
          <Header>종사자 평균 학력별 분야</Header>
          <div className={classes.mobileGrid} style={{ width: '20rem' }}>
            <Highlight className={txtClasses.highlight}>
              중졸이하{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 1).length === 0 ? (
                  <li key={ctx.jobs[1]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 1)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              고졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 2).length === 0 ? (
                  <li key={ctx.jobs[2]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 2)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              전문대졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 3).length === 0 ? (
                  <li key={ctx.jobs[3]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 3)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              대졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 4).length === 0 ? (
                  <li key={ctx.jobs[4]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 4)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              대학원졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 5).length === 0 ? (
                  <li key={ctx.jobs[5]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 5)
                    .map((item) => (
                      <li key={ctx.jobs[5]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
          </div>
          <Header>종사자 평균 전공별 분야</Header>
          <div className={classes.mobileGrid}>
            <Highlight className={txtClasses.highlight}>
              계열무관{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 0).length === 0 ? (
                  <li key={ctx.majors[0]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 0)
                    .map((item) => (
                      <li key={ctx.majors[0]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              인문{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 1).length === 0 ? (
                  <li key={ctx.majors[1]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 1)
                    .map((item) => (
                      <li key={ctx.majors[1]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              사회{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 2).length === 0 ? (
                  <li key={ctx.majors[2]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 2)
                    .map((item) => (
                      <li key={ctx.majors[2]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              교육{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 3).length === 0 ? (
                  <li key={ctx.majors[3]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 3)
                    .map((item) => (
                      <li key={ctx.majors[3]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              공학{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 4).length === 0 ? (
                  <li key={ctx.majors[4]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 4)
                    .map((item) => (
                      <li key={ctx.majors[4]} className={classes.li}>
                        {item.slice(0, -1)}
                      </li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              자연{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 5).length === 0 ? (
                  <li key={ctx.majors[5]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 5)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              의학{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 6).length === 0 ? (
                  <li key={ctx.majors[6]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 6)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              예체능{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 7).length === 0 ? (
                  <li key={ctx.majors[7]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 7)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
          </div>
        </Card>
      </Mobile>
      <Desktop>
        <Card>
          <Header>2. 나의 가치관과 관련이 높은 직업</Header>
          <Header>종사자 평균 학력별 분야</Header>
          <div className={classes.grid}>
            <Highlight className={txtClasses.highlight}>
              중졸이하{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 1).length === 0 ? (
                  <li key={ctx.jobs[1]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 1)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              고졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 2).length === 0 ? (
                  <li key={ctx.jobs[2]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 2)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              전문대졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 3).length === 0 ? (
                  <li key={ctx.jobs[3]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 3)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              대졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 4).length === 0 ? (
                  <li key={ctx.jobs[4]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 4)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              대학원졸{' '}
              <SubText>
                {ctx.jobs.filter((item) => item[1] === 5).length === 0 ? (
                  <li key={ctx.jobs[5]}>없음</li>
                ) : (
                  ctx.jobs
                    .filter((item) => item[1] === 5)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
          </div>
          <Header>종사자 평균 전공별 분야</Header>
          <div className={classes.grid}>
            <Highlight className={txtClasses.highlight}>
              계열무관{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 0).length === 0 ? (
                  <li key={ctx.majors[0]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 0)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              인문{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 1).length === 0 ? (
                  <li key={ctx.majors[1]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 1)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              사회{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 2).length === 0 ? (
                  <li key={ctx.majors[2]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 2)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              교육{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 3).length === 0 ? (
                  <li key={ctx.majors[3]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 3)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              공학{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 4).length === 0 ? (
                  <li key={ctx.majors[4]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 4)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              자연{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 5).length === 0 ? (
                  <li key={ctx.majors[5]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 5)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              의학{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 6).length === 0 ? (
                  <li key={ctx.majors[6]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 6)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
            <Highlight className={txtClasses.highlight}>
              예체능{' '}
              <SubText>
                {ctx.majors.filter((item) => item[1] === 7).length === 0 ? (
                  <li key={ctx.majors[7]}>없음</li>
                ) : (
                  ctx.majors
                    .filter((item) => item[1] === 7)
                    .map((item) => (
                      <li className={classes.li}>{item.slice(0, -1)}</li>
                    ))
                )}
              </SubText>
            </Highlight>
          </div>
        </Card>
      </Desktop>
    </>
  );
};

export default Table;
