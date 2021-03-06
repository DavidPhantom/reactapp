import React from "react";

class EmailStep extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    }
    return(
      <div>
        <label>Email </label>
        <input
          name="email"
          type="text"
          placeholder="Введите email"
          value={this.props.email}
          onChange={this.props.handleChange}
          style={{
            borderColor: this.props.emailColor,
            padding: (20, 10),
            boxSizing: 'border-box',
            fontSize: 16,
          }}
        />
      </div>
    );
  }
}

export default EmailStep;
