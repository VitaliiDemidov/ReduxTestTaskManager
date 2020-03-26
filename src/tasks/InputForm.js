import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAsyncTask } from "../redux/thunkStore/actions";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      id: Date.now().toString()
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
    this.props.createAsyncTask(this.state);

    // const { title } = this.state;
    // if (!title.trim()) {
    // }
    // const newTask = {
    //   title,
    //   id: Date.now().toString()
    // };
    // this.props.createTask(newTask);
    // this.setState({ title: "" });
    // this.props.createTask(this.state);
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
              type="text"
              className="form-control"
              id="title"
              placeholder="type some task"
              name="title"
              required
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

const mapDispatchToProps = dispatch => {
  return {
    createAsyncTask: task => dispatch(createAsyncTask(task))
  };
};

export default connect(null, mapDispatchToProps)(InputForm);
