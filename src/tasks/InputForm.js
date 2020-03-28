import React from "react";
import { connect } from "react-redux";
import { createAsyncTask } from "../redux/thunkStore/actions";

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
    this.setState({ title: "" });
    this.props.createAsyncTask(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Enter Task</label>
            <input
              onChange={this.changeInputHendler}
              value={this.state.title}
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
