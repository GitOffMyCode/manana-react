import React from "react"

class Task extends React.Component {
    render() {
        return ( 
            <div>
            <ul>
                <hr class="taskDivider" />
                <li class="mx-3 taskText">{this.props.text}
                    <span className="fa fa-trash icon-bin"></span>
                    <span className="fa fa-check-circle icon-todo"></span>
                </li>
            </ul>
        </div>
        );
    }
}

export default Task;