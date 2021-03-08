import React, { useState } from "react";
import "./App.css";
import Logo from "./logo.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Published from "./components/Published";
import CreateSurvey from "./components/CreateSurvey";
function App() {
  const [surveyquestions, setSurveyquestions] = useState([]);

  return (
    <div className="App">
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <Router>
          <Link to="/">
            <img className="col-md-6 img-fluid" alt="logo" src={Logo} />
          </Link>
          <Switch>
            <Route path="/" component={Menu} exact />
            <Route path="/create" exact>
              <CreateSurvey
                surveyquestions={surveyquestions}
                setSurveyquestions={setSurveyquestions}
              ></CreateSurvey>
            </Route>
            <Route path="/published" exact>
              <Published questions={surveyquestions} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
