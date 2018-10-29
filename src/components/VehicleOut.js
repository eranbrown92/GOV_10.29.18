import React from "react";

class VehicleOut extends React.Component {
  render() {
    const { user, uid } = this.props;
    return (
      <div>
        <ul key={uid}>
          <li>Name: {user.name} - Reason: {user.reason} - Building: {user.building} - Time Out: {user.timeout}</li>
        </ul>
      </div>
    );
  }
}
export default VehicleOut;
