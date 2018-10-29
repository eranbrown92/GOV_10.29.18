import React from "react";

class VehicleOut extends React.Component {
  handleClick(e){
    const user = document.getElementById('user').innerHTML
    alert(`${user} returned a GOV at ` + Date.toString())
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header light-blue">
            <h4 id='user'>{user.name}</h4>
          </li>
          <li className="collection-item">Reason: {user.reason}</li>
          <li className="collection-item">Building: {user.building}</li>
          <li className="collection-item">
            <div>
              Time Out: {user.timeout}
              <a  onClick={this.handleClick}href="#!" className="secondary-content">
                <i className="red-text">Return</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default VehicleOut;
