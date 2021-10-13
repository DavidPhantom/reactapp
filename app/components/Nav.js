import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

export default class Nav extends React.Component{
  render(){
    return <div>
      <Link exact to="/">Главная</Link> <br></br>
      <Link exact to="/userform">Форма пользователя</Link>
    </div>;
  }
}
