import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Top from "./pages/Top";
import Training from "./pages/Training";
import Result from "./pages/Result";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <Fragment>
      <Router>
        <Header history={window.history} />
        <Route exact path="/" component={Top} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/result" component={Result} />
        <Route exaxt path="/mypage" component={Mypage} />
      </Router>
    </Fragment>
  );
}

export default App;
