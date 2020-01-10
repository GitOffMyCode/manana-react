import React from "react";
import moment from "moment";

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
                    {this.props.isOverDue ? <span className="overdue"><i className="fa fa-exclamation-circle"></i></span> : <span></span>}
                    {this.props.text}
                    <span className="fa fa-trash icon-bin" onClick={this.handleDelete}></span>
                    <span className="fa fa-check-circle icon-todo" onClick={this.handleDone} ></span>
                    <div><span className="small-text-grey">
                    {this.props.isOverDue ? <span>overdue: </span> : <span>due by: </span>}
                        </span>
                    <span className="small-text">
                        {moment(this.props.dueBy, "YYYY-MM-DD").format("dddd Do MMM YYYY")}
                        </span></div>
                </li>
            </ul>
        </div>
        );
    }
}

export default Task;
