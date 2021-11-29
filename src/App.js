import { Route, Switch } from "react-router-dom";
import UserInfoPage from "./components/pages/UserInfoPage";
import TestPage from "./components/pages/TestPage";
import TestEndPage from "./components/pages/TestEndPage";
import TestStartPage from "./components/pages/TestStartPage";
import ResultPage from "./components/pages/ResultPage";
import Layout from "./components/layout/Layout";

function App() {

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/example">
            <TestStartPage />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/test-end">
            <TestEndPage />
          </Route>
          <Route exact path="/">
            <UserInfoPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
