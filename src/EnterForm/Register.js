import React from "react";
import { NavLink } from "react-router-dom";

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  hundleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
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
              placeholder="..."
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
              placeholder="..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Your Name</label>
            <input
              onChange={this.handleChange}
              required
              id="name"
              type="text"
              className="form-control"
              placeholder="..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Last Name</label>
            <input
              onChange={this.handleChange}
              required
              id="lastName"
              type="text"
              className="form-control"
              placeholder="..."
            />
          </div>
          <div className="form-group"></div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <NavLink to="/">
            {" "}
            <button type="button" className="btn btn-secondary">
              Back
            </button>
          </NavLink>{" "}
        </form>
      </div>
    );
  }
}

export default Register;
