import React from "react"

class DoneTask extends React.Component {

    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }

    render() {
        return (
            <div>
                <ul>
                    <hr className="taskDivider" />
                    <li className="mx-3 done"><s>{this.props.text}</s>
                        <span className="fa fa-trash icon-bin" onClick={this.handleDelete}></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DoneTask;