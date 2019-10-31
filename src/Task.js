import React from "react"

class Task extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    handleDone = () => {
        this.props.doneTaskFunc(this.props.id)
    }

    render() {
        return ( 
            <div>
            <ul>
                <hr className="taskDivider" />
                <li className="mx-3 taskText">
                    {this.props.text}
                    <span className="fa fa-trash icon-bin" onClick={this.handleDelete}></span>
                    <span className="fa fa-check-circle icon-todo" onClick={this.handleDone} ></span>
                </li>
            </ul>
        </div>
        );
    }
}

export default Task;
