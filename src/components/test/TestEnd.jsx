import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Card from "../layout/ui/card/Card";
import TestContext from "../store/test-ctx";
import UserContext from "../store/user-ctx";
import SubText from "../layout/ui/text/SubText";
import { API_KEY, CAT_NUM } from "../data-src/data-src";

import btnClasses from "../layout/ui/button/Button.module.css";
import cardClasses from "../layout/ui/card/Card.module.css";
import txtClasses from "../layout/ui/text/Highlight.module.css";

import axios from "axios";
import Header from "../layout/ui/header/Header";
import Loading from "../loading/Loading";
import Highlight from "../layout/ui/text/Hightligtht";

const RESULT_URL = `https://www.career.go.kr/inspct/openapi/test/report?apikey=${API_KEY}&qestrnSeq=${CAT_NUM}`;

const TestEnd = () => {
  const history = useHistory();

  const usrCtx = useContext(UserContext);
  const ctx = useContext(TestContext);
  const [isLoading, setIsLoading] = useState(false);

  const cors = axios.create({
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    const params = {
      apikey: API_KEY,
      qestrnSeq: "6",
      trgetSe: "100209",
      name: usrCtx.userName,
      gender: usrCtx.userGender === "남자" ? "100323" : "100324",
      startDtm: new Date().getTime(),
      answers: Object.entries(ctx.aList)
        .map((item) => {
          return item.join("=");
        })
        .join(" "),
    };
    (async () => {
      const res = await cors.post(RESULT_URL, params);
      const seq = res.data.RESULT["url"].split("seq=")[1];
      const secRes = await axios.get(
        "https://www.career.go.kr/inspct/api/psycho/report?seq=" + seq
      );
      const wonScore = secRes.data.result.wonScore.split(" ").filter((x) => x);
      const resultArr = wonScore.map((item) => {
        const data = item.split("=");
        return { num: data[0], score: parseInt(data[1]) };
      });
      resultArr.sort((a, b) => {
        return b.score - a.score;
      });
      ctx.onSetResult([...resultArr]);

      const [val1, val2] = [resultArr[0].num, resultArr[1].num];
      const jobResult = await axios.get(
        `https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${val1}&no2=${val2}`
      );
      const majorResult = await axios.get(
        `https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${val1}&no2=${val2}`
      );
      const jobData = Object.entries(jobResult.data)
        .map((item) => item.splice(1, 2).map((i) => i.splice(1, 2)))
        .flat();
      const majorData = Object.entries(majorResult.data)
        .map((item) => item.splice(1, 2).map((i) => i.splice(1, 2)))
        .flat();

      ctx.onSetJobs(jobData);
      ctx.onSetMajors(majorData);

      setIsLoading(true);
    })();
  }, []);

  const handleMoveToResult = () => {
    history.push("/result");
  };

  return (
    <>
      {!isLoading ? (
        <Loading />
      ) : (
        <Card className={cardClasses.cardUser}>
          <Header>검사가 완료되었습니다.</Header>
          <SubText>
            직업생활과 관련하여{" "}
            <Highlight className={txtClasses.highlight}>
              {usrCtx.userName}
            </Highlight>
            님은{" "}
            <Highlight className={txtClasses.highlight}>
              {ctx.questionInfo[ctx.result[0].num]}
            </Highlight>
            과(와){" "}
            <Highlight className={txtClasses.highlight}>
              {ctx.questionInfo[ctx.result[1].num]}
            </Highlight>
            를(을) 가장 중요하게 생각합니다.
            <br /> 반면,{" "}
            <Highlight className={txtClasses.highlight}>
              {ctx.questionInfo[ctx.result[ctx.result.length - 1].num]}
            </Highlight>
            과(와){" "}
            <Highlight className={txtClasses.highlight}>
              {ctx.questionInfo[ctx.result[ctx.result.length - 2].num]}
            </Highlight>
            를(을) 상대적을 덜 중요하게 생각합니다.
          </SubText>
          <Header>최적 직업 Top 5</Header>
          <ol style={{ padding: 0 }}>
            <li>
              <Highlight className={txtClasses.highlight}>
                {ctx.jobs[0].slice(0, -1)}
              </Highlight>
            </li>
            <li>
              <Highlight className={txtClasses.highlight}>
                {ctx.jobs[1].slice(0, -1)}
              </Highlight>
            </li>
            <li>
              <Highlight className={txtClasses.highlight}>
                {ctx.jobs[2].slice(0, -1)}
              </Highlight>
            </li>
            <li>
              <Highlight className={txtClasses.highlight}>
                {ctx.jobs[3].slice(0, -1)}
              </Highlight>
            </li>
            <li>
              <Highlight className={txtClasses.highlight}>
                {ctx.jobs[4].slice(0, -1)}
              </Highlight>
            </li>
          </ol>
          <button
            className={btnClasses.btnTestEnd}
            onClick={handleMoveToResult}
          >
            결과 보기
          </button>
        </Card>
      )}
    </>
  );
};

export default TestEnd;
