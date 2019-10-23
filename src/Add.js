import React from "react"

class Add extends React.Component {
    render() {
        return (
            <div>

            <form>
                <div className="form-row">
                    <div className="col-9"><input type="text" className="form-control" placeholder="add a task" /></div>                        
                    <div className="col-3"><button className="btn">add</button></div>
                </div>
            </form>
            <hr />

            </div>
                );
            }
        }
        
export default Add;