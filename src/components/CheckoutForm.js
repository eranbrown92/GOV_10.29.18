import React from "react";

class CheckoutForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.handleFormData(this.state);
    e.target.reset();
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div className='col s3  full-width'>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              placeholder='Rank/Name'
              value={this.state.value}
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <label>Reason: </label>
            <input
              type="text"
              name="reason"
              placeholder='Ticket'
              value={this.state.value}
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <label>Building: </label>
            <input
              type="text"
              name="building"
              placeholder='9000'
              value={this.state.value}
              onChange={this.onChange}
              required
            />
          </div>
          <div>
            <label>Time out: </label>
            <input
              type="time"
              name="timeout"
              value={this.state.value}
              onChange={this.onChange}
              required
            />
          </div>
          <p>
            <input className='waves-effect waves-light light-blue btn' type="submit" value="submit" />
          </p>
        </form>
      </div>
    );
  }
}
export default CheckoutForm;
