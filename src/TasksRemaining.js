import React from "react"

class TasksRemaining extends React.Component {
    render() {
      return <p>You have {this.props.count} items left on your todo list</p>;
    }
  }
  
        
export default TasksRemaining;


