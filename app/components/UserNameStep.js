import React from "react";

class UserNameStep extends React.Component {

  render() {
    if (this.props.currentStep !== 1) {
      return null
    }
    return(
      <div>
        <label>Имя </label>
        <input
          name="username"
          type="text"
          placeholder="Введите имя"
          value={this.props.username}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default UserNameStep;
