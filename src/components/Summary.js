import React from "react";
import VehicleOut from "./VehicleOut";
import CheckoutForm from "./CheckoutForm";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: []
    };
    this.handleFormData = this.handleFormData.bind(this);
  }
  handleFormData(e) {
    this.setState({
      details: [...this.state.details, e]
    });
  }
  returnFromJob(id){
    // copy the state
   const stateCopy = Object.assign([], this.state.details)
   // remove the id from the state.details array
   stateCopy.splice(id, 1)
   // update state
   this.setState({details: stateCopy})
  }
  render() {
    return (
      <div>
        <div>
          <CheckoutForm handleFormData={this.handleFormData} />
        </div>
        <div className="col s9">
          {this.state.details.map((user, id) => {
            return <VehicleOut 
            key={id} 
            user={user}
            returnFromJob={this.returnFromJob.bind(this, id)}
             />;
          })}
        </div>
      </div>
    );
  }
}
export default Summary;
