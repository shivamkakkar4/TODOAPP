import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Consumer } from '../context';
import axios from 'axios';

class ToDoTask extends Component {
  onDeleteClick = (id, dispatch) => {
      axios.post("/deleteData",{'delTask': id})
      dispatch({ type: 'DELETE_TASK', payload: id });
  };
  render() {
    const { id, task, startDate , time } = this.props.Task;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return(
            <div id="taskBody" className="card card-body mt-3 mb-3 form-check py-0">
              <Link to = {`task/edit/${id}`} style={{textDecoration: 'none',color: 'black'}} className="random" data-toggle="tooltip" data-placement="right" title="Edit Task">
                <h4 id="taskValue">{task}</h4>
                <p id="dateandtime">{startDate.substring(1,11)} , {time}</p>
              </Link>
                <h4><i id="deleteButton" className="fas fa-times" style={{cursor: 'pointer',float: 'right', color:'black'}} onClick={this.onDeleteClick.bind(this, id, dispatch)} /></h4>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default ToDoTask;
