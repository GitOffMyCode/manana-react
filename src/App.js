import React from 'react';
import Header from "./Header";
import Add from "./Add";
import Task from "./Task";
import DoneTask from "./DoneTask";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container mx-auto my-md-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <Header />
            </div>
            <div className="col-12 col-md-6">
            <h2>ADD IT</h2>
              <Add />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
            <h2>DO IT</h2>
              <Task text="ring Dad" />
              <Task text="go for a run"/>
              <Task text="finish homework"/>
              <Task text="buy gin"/>
              <Task text="book holiday"/>
              <hr />
            </div>
            <div className="col-12 col-md-6">
            <h2>DONE IT</h2>
              <DoneTask text="shopping"/>
              <DoneTask text="wash the car"/>
              <DoneTask text="clean fish tank"/>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


