import React from "react"

class Task extends React.Component {

    eventHandlerDone () {
        console.log("done!")
    }

    render() {
        return ( 
            <div>
            <ul>
                <hr className="taskDivider" />
                <li className="mx-3 taskText">
                    {this.props.text}
                    <span className="fa fa-trash icon-bin"></span>
                    <span className="fa fa-check-circle icon-todo" onClick={this.eventHandlerDone}></span>
                </li>
            </ul>
        </div>
        );
    }
}

export default Task;
