import React from "react";

class VehicleOut extends React.Component {
  render() {
    const { user, uid } = this.props;
    return (
      <div key={uid}>
        <ul  className="collection with-header">
          <li className="collection-header">
            <h4>{user.name}</h4>
          </li>
          <li className="collection-item">Reason: {user.reason}</li>
          <li className="collection-item">Building: {user.building}</li>
          <li className="collection-item">Time Out: {user.timeout}</li>
        </ul>
      </div>
    );
  }
}
export default VehicleOut;
