import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createTask } from "../redux/action";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }
  changeInputHendler = e => {
    e.persist();
    this.setState(prev => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value
      }
    }));
  };

  submitHandler = e => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return; // this.props.showAlert("enter some text");
    }
    const newTask = {
      title,
      id: Date.now().toString()
    };
    this.props.createTask(newTask);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div>
        <NavLink to="/">
          <button className="btn btn-warning" type="button">
            Back
          </button>
        </NavLink>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Enter Task</label>
            <input
              onChange={this.changeInputHendler}
              value={this.state.title}
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="type some task"
              name="title"
            />
            <button className="btn btn-primary" type="submit">
              Add Task
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createTask
};

export default connect(null, mapDispatchToProps)(InputForm);
