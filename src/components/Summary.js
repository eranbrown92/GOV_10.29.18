import React from "react";
import VehicleOut from "./VehicleOut";
import CheckoutForm from "./CheckoutForm";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      availGov: 1
    };
    this.handleFormData = this.handleFormData.bind(this);
  }
  handleFormData(e) {
    this.setState(()=>({
      details: [...this.state.details, e],
      availGov: this.state.availGov - 1
    }));
  }
  returnFromJob(id) {
    // copy the state
    const stateCopy = Object.assign([], this.state.details);
    // remove the id from the state.details array
    stateCopy.splice(id, 1);
    // update state
    this.setState({ details: stateCopy, availGov: this.state.availGov + 1 });
    console.log(id, ' returned at ', Date())
  }
  render() {
    return (
      <div>
        <div>
          <CheckoutForm 
          handleFormData={this.handleFormData} 
          availGov={this.state.availGov}
          />
        </div>
        <div className="col s9">
            <div className="nav-wrapper center">
            <div className="chip">{this.state.availGov <= 0 ? 'Sorry, there are no available GOVs' : `${this.state.availGov} available GOV(s)` }</div>
            </div>
          {this.state.details.map((user, id) => {
            return (
              <VehicleOut
                key={id}
                user={user}
                returnFromJob={this.returnFromJob.bind(this, id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Summary;
