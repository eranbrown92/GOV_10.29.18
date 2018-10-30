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
    this.setState({ 
      details: stateCopy,
      availGov: this.state.availGov + 1
    }); 
  }
  render() {
    return (
      <div>
        <div>
        {this.state.availGov >0?
            <CheckoutForm
              handleFormData={this.handleFormData}
              availGov={this.state.availGov}
            />:
            <div className="col s3 center ">
              <div className="preloader-wrapper z-depth-3 circle big active ">
                <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <blockquote>
                  Patiently waiting for someone to return 
                  </blockquote>
              </div>
            </div>
         }
          
        </div>
        <div className="col s9">
            <div className="center">
              <div className="chip">
                {this.state.availGov <= 0 ?
                'Sorry, there are no available GOVs' :
                `${this.state.availGov} available GOV(s)`}
              </div>
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
