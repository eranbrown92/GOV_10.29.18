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
  render() {
    return (
      <div>
        <CheckoutForm handleFormData={this.handleFormData} />
        {this.state.details.map((user, id) => {
          return <VehicleOut uid={id} user={user} />;
        })}
      </div>
    );
  }
}
export default Summary;
