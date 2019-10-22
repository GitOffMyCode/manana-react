import React from "react"

class Task extends React.Component {
    render() {
        return ( 
            <div>
            <ul>
                <hr class="taskDivider" />
                <li class="mx-3 taskText">{this.props.text}
                    <a href="#"><span className="fa fa-trash icon-bin"></span></a>
                    <a href="#"><span className="fa fa-check-circle icon-todo"></span></a>
                </li>
            </ul>
        </div>
        );
    }
}

export default Task;