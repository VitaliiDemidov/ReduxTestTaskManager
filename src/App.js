import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskManager from "./tasks/TaskManager";
import Form from "./EnterForm/Form";
import Register from "./EnterForm/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route path={"/"} exact component={Form} />
          <Route path={"/TaskManager/:id"} component={TaskManager} />
          <Route path={"/Register"} component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
