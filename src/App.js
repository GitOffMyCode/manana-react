import React from 'react';
import axios from "axios";
import Header from "./Header";
import Add from "./Add";
import TasksRemaining from "./TasksRemaining"
import Task from "./Task";
import DoneTask from "./DoneTask";
import moment from "moment";
import './App.css';

class App extends React.Component {

  // taskText, dateDue, completed, userId 	
  state = {
    tasks: []
  }

  // GET all the tasks as soon as the react app is loaded
  componentDidMount() {
    axios.get("https://ewli15zf1g.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then(response => {
        const tasksFromDB = response.data;
        this.setState({
          tasks: tasksFromDB
        });
      })
      .catch(err => {
        console.log("Error getting data", err)
      })
  }

  // sorts tasks by dueByDate
  sortTasksByDueDate = tasks => {
    const sortedTasks = tasks.map(task => {
      const dueByMoment = moment(task.dateDue);
      task.dateDue = dueByMoment
      return task;
    });
    sortedTasks.sort((a,b) => {
      return a.dateDue.isAfter(b.dateDue) ? 1 : -1
    });
    return sortedTasks;
  }

  // POST a new task (2 parameters: taskText and dueByDate)
  addNewTask = (taskText, dueByDate) => {
    const tasksCopy = this.state.tasks.slice()
    const newTask = {
      taskText: taskText,
      dateDue: dueByDate,
      completed: false,
      userId: 1
    };
    axios.post("https://ewli15zf1g.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
      .then(response => {
        const taskFromDB = response.data;
        tasksCopy.push(taskFromDB)
        this.setState({
          tasks: tasksCopy
        })
      })
      .catch(err => {
        console.log("Error creating task", err)
      })
  }

  // DELETE a task (1 paramter: id)
  deleteTask = (id) => {
    axios.delete("https://ewli15zf1g.execute-api.eu-west-1.amazonaws.com/dev/tasks/" + id)
      .then(response => {
        const updatedTasks = this.state.tasks.filter(task => {
          return task.taskId !== id
        });
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch(err => {
        console.log("Error deleting task", err)
      })
  }

  // PUT updates a task to completed (1 paramter: id)
  doneTask = (id) => {
    axios.put("https://ewli15zf1g.execute-api.eu-west-1.amazonaws.com/dev/tasks/" + id)
      .then(response => {
        const updatedTasks = this.state.tasks.map(task => {
          if (task.taskId === id) task.completed = true
          return task;
        });
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch(err => {
        console.log("Error updating task", err)
      })
  }

  render() {

    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    });
    const incompleteTasks = this.state.tasks.filter(task => {
      return !task.completed;
    });
    const sortedIncompleteTasks = this.sortTasksByDueDate(incompleteTasks);

    return (
      <div>
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
              <TasksRemaining count={incompleteTasks.length} />

              {sortedIncompleteTasks.map(task => {
                return <Task
                  text={task.taskText}
                  completed={task.completed}
                  key={task.taskId}
                  id={task.taskId}
                  dueBy={task.dateDue}
                  doneTaskFunc={this.doneTask}
                  deleteTaskFunc={this.deleteTask} />
              })}

              <hr />
            </div>
            <div className="col-12 col-md-6">
              <h2>DONE IT</h2>

              {completedTasks.map(task => {
                return <DoneTask
                  text={task.taskText}
                  completed={task.completed}
                  key={task.taskId}
                  id={task.taskId}
                  deleteTaskFunc={this.deleteTask} />
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


