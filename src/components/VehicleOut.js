import React from "react";

class VehicleOut extends React.Component {
  render() {
    const { user, uid } = this.props;
    return (
      <div key={uid} className='container'>
        <ul  className="collection with-header">
          <li className="collection-header light-blue">
            <h4>{user.name}</h4> 
          </li>
          <li className="collection-item">Reason: {user.reason}</li>
          <li className="collection-item">Building: {user.building}</li>
          <li className="collection-item"><div>Time Out: {user.timeout}<a href="#!" className="secondary-content"><i className="material-icons red-text">Return</i></a></div></li>
        </ul>
      </div>
    );
  }
}
export default VehicleOut;
