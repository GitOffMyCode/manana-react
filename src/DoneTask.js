import React from "react"

class DoneTask extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <hr className="taskDivider" />
                    <li className="mx-3 done"><s>{this.props.text}</s>
                        <span className="fa fa-trash icon-bin"></span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default DoneTask;