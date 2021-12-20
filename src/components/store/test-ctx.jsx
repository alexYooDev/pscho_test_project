import React, { useState, useEffect } from 'react';
import { TEST_URL } from '/Users/alexyoodev/alexDevDir/fst-project/alex/src/components/data-src/data-src';
import axios from 'axios';

export const jobInfo = {
  1: '중졸이하',
  2: '고졸',
  3: '전문대졸',
  4: '대졸',
  5: '대학원졸',
};

export const majorInfo = {
  1: '인문',
  2: '사회',
  3: '교육',
  4: '공학',
  5: '자연',
  6: '의학',
  7: '예체능',
};
export const questionInfo = {
  1: '능력발휘',
  2: '자율성',
  3: '보수',
  4: '안정성',
  5: '사회적 인정',
  6: '사회봉사',
  7: '자기계발',
  8: '창의성',
};

const TestContext = React.createContext({
  data: [],
  onSelect: () => {},
  selectedVal: '',
  onSetCurItems: () => {},
  curPage: 1,
  onSetCurPage: () => {},
  itemsPerPage: 5,
  isLoading: false,
  onCheck: () => {},
  checked: {},
  onSetPercent: () => {},
  percent: 0,
  onSetProgress: () => {},
  onSetAList: () => {},
  aList: [],
  result: [],
  progress: '',
  onSetResult: () => {},
  onSetNow: () => {},
  now: 1,
  exampleDone: 0,
  onSetExampleDone: () => {},

  questionInfo: {
    1: '능력발휘',
    2: '자율성',
    3: '보수',
    4: '안정성',
    5: '사회적 인정',
    6: '사회봉사',
    7: '자기계발',
    8: '창의성',
  },
  jobInfo: {
    1: '중졸이하',
    2: '고졸',
    3: '전문대졸',
    4: '대졸',
    5: '대학원졸',
  },
  majorInfo: {
    1: '인문',
    2: '사회',
    3: '교육',
    4: '공학',
    5: '자연',
    6: '의학',
    7: '예체능',
  },
  onSetJobs: () => {},
  jobs: {},
  onSetMajors: () => {},
  majors: {},
});

export const TestContextProvider = (props) => {
  const [result, setResult] = useState([]);
  const [qList, setQList] = useState([]);
  const [aList, setAList] = useState(['0']);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVal, setSelectedVal] = useState('');
  const [exampleDone, setExampleDone] = useState(0);
  const [percent, setPercent] = useState(0);
  const [curPage, setCurPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [checked, setChecked] = useState({});
  const [jobs, setJobs] = useState([]);
  const [majors, setMajors] = useState([]);
  const [now, setNow] = useState(1);
  const [progress, setProgress] = useState(0);

  const fetchQuestions = async () => {
    setIsLoading(true);
    const res = await axios.get(TEST_URL);
    const resData = await res.data.RESULT;
    const loadedData = [];

    for (const key in resData) {
      loadedData.push({
        qitemNo: resData[key].qitemNo,
        question: resData[key].question,
        answer01: resData[key].answer01,
        answer02: resData[key].answer02,
        answer03: resData[key].answer03,
        answer04: resData[key].answer04,
        answerScore01: resData[key].answerScore01,
        answerScore02: resData[key].answerScore02,
      });
    }
    setIsLoading(false);
    setQList(loadedData);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <TestContext.Provider
      value={{
        data: qList,
        onSelect: setSelectedVal,
        selectedVal: selectedVal,
        onSetCurPage: setCurPage,
        curPage: curPage,
        onSetItemPerPage: setItemsPerPage,
        itemsPerPage: itemsPerPage,
        isLoading: isLoading,
        onCheck: setChecked,
        checked: checked,
        onSetPercent: setPercent,
        percent: percent,
        onSetAList: setAList,
        aList: aList,
        result: result,
        onSetResult: setResult,
        jobInfo: jobInfo,
        majorInfo: majorInfo,
        questionInfo: questionInfo,
        onSetJobs: setJobs,
        jobs: jobs,
        onSetMajors: setMajors,
        majors: majors,
        onSetNow: setNow,
        now: now,
        onSetProgress: setProgress,
        progress: progress,
        onSetExampleDone: setExampleDone,
        exampleDone: exampleDone,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContext;
