# Individual Web Front-end Development Project 
(개인 프론트엔드 웹개발 프로젝트) 
[career valance game: job aptitude && psychologicy test]

[링크: Career Balance Game](https://psycho-test-project.vercel.app/)

## About the Creator (개발자 소개)
Hwanik Alexander Yoo (Front-end Developer)

## Tech Stack(기술 스택)

### Main Technology(주요 기술)
- React.js
- Css Module (스타일)
- Context API (상태값 관리)

### Libraries(라이브러리)
- React Router Dom (Routing pages)
- React Responsive (useMediaQuery: Responsive UI)
- Axios (Server API communication)
- Recharts (Chart Visualization)

### Deployment(배포 환경)
- Ubuntu
- nginx

## Image Examples(시연): Web Env(웹 환경)

### User Information Input(유저 정보 입력 페이지)

<img src="./photo/1.png" width="700">

- Input User's Information(유저의 정보 입력)
  <br>

### In case of incorrect format of input(정보 입력 포맷 틀릴 시)

<img src="./photo/2.png" width="700">

- Modal pop up in case of one wrong input format at the least(하나라도 미선택하거나, 잘못된 이름 입력 시, 경고 모달을 띄웁니다.)
  <br>

### Activate Submit Button for correct input format(정보 정상 입력 시 버튼 활성화)

<img src="./photo/2_1.png" width="700">

- Activate Submit Button for correct input(정상 입력을 마치면, 시작 버튼을 활성화합니다.)
  <br>

### Question Example Page(예제 페이지)

<img src="./photo/4.png" width="700">

- Example page lets user demonstrate how the test should be done(예제 페이지는 테스트의 예시 문제를 보여줍니다.)
  <br>

### In case of misselection of question(예제 미선택 시)

<img src="./photo/3.png" width="700">

- Worning Modal pop when example question not selected (예시 항목을 선택하지 않으면, 경고 모달을 띄웁니다.)
  <br>

### Requesting && Loading Data from the server API(정보 불러오기 중 로딩 컴포넌트)

<img src="./photo/5.png" width="700">

- Visualizes loading component when server data arrival is pending (비동기 통신이 일어나는 모든 구간에는 요소를 모두 로드하기 전, 로딩 페이지를 보여줍니다.)
  <br>

### Questions Page(문제 페이지)

<img src="./photo/6.png" width="700">

- Total of 5 questions are given for each page(문제 페이지에는 5개 문항 씩 문제가 나열됩니다.)
- For each question, 2 choices are available to select at least one(문항 당 2개씩 문제가 주어지고, 각 문항에서 문제를 1택하여 진행합니다.)
- Progress bar progresses for each selection from the question(선택지를 선택할 때마다 진행 바가 채워지며 퍼센테이지가 높아집니다.)
  <br>

### In Case of Non-selection of questions, next button is disabled(문제 모두 선택 안할 시, 다음 버튼 비활성화)

<img src="./photo/7.png" width="700">

- When user fails to answer total of 5 questions, the button to the next page gets disabled(한 페이지에 있는 5개 문제 모두를 선택하지 않으면 다음 버튼은 비활성화 됩니다.)
  <br>

### In Case of answering all  28 questions, Test end button is activated(문제 모두 완료 시, 종료 버튼 활성화)

<img src="./photo/8.png" width="700">

- In case of answering all questions provided, Test end button gets activated(모든 문항을 선택 완료시, 종료 버튼이 활성화됩니다.)
  <br>

### Test End Page(테스트 완료 페이지)

<img src="./photo/9.png" width="700">

- Upon completion of the whole test, the page visualizes top 2 professional aspect the user value the most and 2 least valued(테스트 완료시, 중요시 하는 점 2가지, 중요시 하지 않는 점 2가지를 보여줍니다.)
- Visualizes 5 most recommendable professions for the user(추천 직종 최상위 순위 5개를 보여줍니다.)
  <br>
- Upon pressing 'TO THE RESULT' button, it loads the detailed test result.

### Test Result Page - TOP(테스트 결과 페이지 상단)

<img src="./photo/10.png" width="700">

- Test participants information and test date is shown above(테스트 응시자의 이름, 응시 날짜를 보여줍니다.)
- User's profession value traits are visualized as a Bar Chart(가치관을 차트로 시각화하여 보여줍니다.)
  <br>

### Test Result Page - BOTTOM (테스트 결과 페이지 하단)

<img src="./photo/11.png" width="700">

- Shows job recommendation by academic achievement(학력별 추천 직종 리스트를 보여줍니다.)
- Shows job recoomendation by academic major(전공별 추천 직종 리스트를 보여줍니다.)
  <br>

### Restart Button(재시작 버튼 하단)

<img src="./photo/13.png" width="700">

- Upon pressing 'RESTART' button, client state reset and routes back to the init page(하단의 재시작 버튼을 눌러 초기 화면으로 돌아갑니다.)
  <br>

---

## Demonstration Image Examples: Responsive Mobile Screen(시연: 반응형 전환)

### Mobile user information Input(모바일 유저 정보 입력)

<img src="./photo/14.png" width="700">
<br>

### Mobile screen example page(모바일 예제 페이지)

<img src="./photo/15.png" width="700">
<br>

### Mobile screen question page-1 (모바일 테스트 페이지-1)

<img src="./photo/16.png" width="700">
<br>

### Mobile screen question page-2 (모바일 테스트 페이지-2)

<img src="./photo/17.png" width="700">
<br>

### Test End Page(모바일 테스트 완료)

<img src="./photo/18.png" width="700">
<br>

### Test Result Page - TOP(모바일 결과 페이지 상단)

<img src="./photo/19.png" width="700">
<br>

### Test Result Page - BOTTOM(모바일 결과 페이지 하단)

<img src="./photo/21.png" width="700">
<br>
