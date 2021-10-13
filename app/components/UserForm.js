import React from "react";
import EmailStep from "./EmailStep";
import PasswordStep from "./PasswordStep";
import UserNameStep from "./UserNameStep";

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      username: 'Tom', nameValid : true,
      email:  'tom@mail.ru', emailValid: true,
      password: '1234567', passwordValid: true,
      disabled: false,
    }
  }

  validateName(name){
    return name.length>2;
  }
  validateEmail(email){
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  validatePassword(password){
    return password.length>6;
  }

  handleChange = event => {
    const {name, value} = event.target
    switch (name) {
      case 'username':
        var valid = this.validateName(value);
        this.setState({
          nameValid: valid,
          disabled: !valid,
        })
        break;
      case 'email':
        var valid = this.validateEmail(value);
        this.setState({
          emailValid: valid,
          disabled: !valid,
        })
        break;
      default:
        var valid = this.validatePassword(value);
        this.setState({
          passwordValid: valid,
          disabled: !valid,
        })
    }
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email, username, password } = this.state;
    alert(`Введенные данные: \nИмя: ${username} \nEmail: ${email} \nПароль: ${password}`)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button
          type="button"
          disabled={this.state.disabled}
          onClick={this._prev}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            margin: (10, 10),
            fontSize: 16
          }}
        >Назад</button>
      )
    }
    return null;
  }

  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <3){
      return (
        <button
          type="button"
          disabled={this.state.disabled}
          onClick={this._next}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            margin: (10, 10),
            fontSize: 16
          }}
        >Вперед</button>
      )
    }
    return null;
  }

  sendButton(){
    let currentStep = this.state.currentStep;
    if(currentStep === 3){
      return (
        <button
          disabled={this.state.disabled}
          style={{
            padding: 15,
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            margin: (10, 0),
            fontSize: 16
          }}
        >Отправить</button>
      )
    }
    return null;
  }

  render() {
    var nameColor = this.state.nameValid===true?"green":"red";
    var emailColor = this.state.emailValid===true?"green":"red";
    var passwordColor = this.state.passwordValid===true?"green":"red";
    return (
      <div>
        <h1>Форма пользователя</h1>
        <p>Шаг {this.state.currentStep} </p>

        <form onSubmit={this.handleSubmit}>
          <UserNameStep
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            username={this.state.username}
            nameColor={nameColor}
          />
          <EmailStep
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            email={this.state.email}
            emailColor={emailColor}
          />
          <PasswordStep
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
            passwordColor={passwordColor}
          />
          <p>
            {this.previousButton()}
            {this.nextButton()}
            {this.sendButton()}
          </p>
        </form>
      </div>
    );
  }
}

export default UserForm;
