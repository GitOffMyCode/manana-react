import React from "react";
import moment from "moment";

class Add extends React.Component {
    state = {
        newItemText: "",
        dateSelected: moment().format("YYYY-MM-DD")
    }

    // input
    updateNewItemText = (event) => {
        this.setState({
            newItemText: event.target.value
        })
    }

    // due date
    handleDateChange = e => {
        this.setState({
            dateSelected: e.target.value
        });
    }

    // button
    handleClick = (event) => {
        event.preventDefault()
        this.props.addNewTaskFunc(this.state.newItemText, this.state.dateSelected)
        this.setState({
            newItemText: ""
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div className="container-fluid">

                        <div className="form-row p-1">
                            <div className="col-12 col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="newItem"
                                    placeholder="add a task"
                                    value={this.state.newItemText}
                                    onChange={this.updateNewItemText}/>
                            </div>
                        </div>
                        
                        <div className="form-row p-1">
                            <div className="col-9 col-md-6">
                                <input 
                                    className="form-control" 
                                    type="date" 
                                    onChange={this.handleDateChange} 
                                    value={this.state.dateSelected} />
                            </div>
                            <div className="col-3 col-md-2">
                                <button className="btn" onClick={this.handleClick} disabled={this.state.newItemText.length === 0 || this.state.newItemText.length > 25}>add</button>
                            </div>
                        </div>

                    </div>
                </form>
                <hr />
            </div>
        );
    }
}

export default Add;