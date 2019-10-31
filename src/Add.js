import React from "react"

class Add extends React.Component {
    state = {
        newItemText: ""
    }

    // input
    updateNewItemText = (event) => {     
        this.setState({
            newItemText: event.target.value
        })
    }

    // button
    handleClick = (event) => {
        event.preventDefault()
        this.props.addNewTaskFunc(this.state.newItemText)
        this.setState({
            newItemText: ""
        })
    }

    render() {
        return (
            <div>

            <form>
                <div className="form-row">
                    <div className="col-9">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="newItem"
                            placeholder="add a task" 
                            value={this.state.newItemText}
                            onChange={this.updateNewItemText}
                        />
                    </div>                        
                    <div className="col-3"><button className="btn" onClick={this.handleClick} disabled={this.state.newItemText.length === 0 || this.state.newItemText.length > 25}>add</button></div>
                </div>
            </form>
            <hr />

            </div>
                );
            }
        }
        
export default Add;