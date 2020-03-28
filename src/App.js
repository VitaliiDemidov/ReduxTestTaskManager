import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TaskManager from "./tasks/TaskManager";
import Form from "./EnterForm/Form";
import Register from "./EnterForm/Register";
import { connect } from "react-redux";

function App(props) {
  const { auth } = props;
  const loggedIn = auth.uid ? <Redirect to="/TaskManager" /> : <Form />;
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path="/">
            {loggedIn}
          </Route>
          <Route path={"/TaskManager"} component={TaskManager} />
          <Route path={"/Register"} component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(App);
