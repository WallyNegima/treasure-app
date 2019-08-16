import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Top from "./pages/Top";
import Training from "./pages/Training";
import Result from "./pages/Result";

function App() {
  return (
    <Fragment>
      <Header />
      <Router>
        <Route exact path="/" component={Top} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/result" component={Result} />
      </Router>
    </Fragment>
  );
}

export default App;
