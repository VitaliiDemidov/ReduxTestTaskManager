import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../redux/thunkStore/authAction";

class Form extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  hundleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.hundleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.handleChange}
              required
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleChange}
              required
              type="password"
              className="form-control"
              id="password"
            />
          </div>
          <div className="form-group form-check"></div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          <NavLink to="/Register">
            <button type="button" className="btn btn-secondary">
              Register
            </button>
          </NavLink>
          <div>
            {authError ? (
              <div className="toast-body ">Oops Fail...try again!!!</div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
