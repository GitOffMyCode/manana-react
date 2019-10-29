import React from 'react';
import uuid from "uuid/v4";
import Header from "./Header";
import Add from "./Add";
import TasksRemaining from "./TasksRemaining"
import Task from "./Task";
import DoneTask from "./DoneTask";
import './App.css';

class App extends React.Component {

  state = {
    tasks: [
      { text: "ring Dad", completed: false, id: uuid() },
      { text: "go for a run", completed: true, id: uuid() },
      { text: "finish homework", completed: false, id: uuid() },
      { text: "buy gin", completed: false, id: uuid() },
      { text: "book holiday", completed: true, id: uuid() },
    ]
  }

  addNewTask = (taskText) => {
    const tasksCopy = this.state.tasks.slice()
    const newTask = {
      text: taskText,
      completed: false,
      id: uuid()
    };
    tasksCopy.push(newTask)
    this.setState({
      tasks: tasksCopy
    });
  }

  markTaskAsDone = () => {

  }

  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    });
    const incompleteTasks = this.state.tasks.filter(task => {
      return !task.completed;
    });

    return (
      <div className="App">
        <div className="container mx-auto my-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <Header />
            </div>
            <div className="col-12 col-md-6">
              <h2>ADD IT</h2>
              <Add addNewTaskFunc={this.addNewTask} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>DO IT</h2>
              <TasksRemaining count={this.state.tasks.length} />

              {incompleteTasks.map(task => {
                return <Task text={task.text} completed={task.completed} key={task.id} />
              })}

              <hr />
            </div>
            <div className="col-12 col-md-6">
              <h2>DONE IT</h2>

              {completedTasks.map(task => {
                return <DoneTask text={task.text} completed={task.completed} key={task.id} />
              })}

              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


