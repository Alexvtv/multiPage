import React, { Component } from "react";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			loginValue: '',
			passwordValue: ''
		}
	}

	sendForm = () => {
		if((this.state.loginValue == 'admin') && (this.state.passwordValue == '12345')) {
			this.props.authorization(this.state.loginValue);
		} else {
			alert('Данные введены неверно. Если у вас нет аккаунта, зарегистрируйтесь');
      this.setState({ loginValue: '' });
      this.setState({ passwordValue: '' });
		}
	}

	render() {
    	return (
    		<div>
    			<div className='background'>
    			</div>
    			<div className='login'>
  					<div className='login-form'>
  						<form>
  							<p>Авторизация</p>
  							<p>Введите логин</p>
  							<input 
  								value={this.state.loginValue} onChange={evt => this.updateLoginValue(evt)}
  							required type='text' />
  							<p>Введите пароль</p>
  							<input 
  								value={this.state.passwordValue} onChange={evt => this.updatePasswordValue(evt)}
  							required type='password' />
  							<input type='button' value='Авторизоваться'
  								onClick={ this.sendForm }
  							/>
  						</form>
  					</div>
  					<div className='login-line'>
  					</div >
  					<div className='registration-form'>
  						<form>
  							<p>Регистрация</p>
  							<p>Укажите почту</p>
  							<input required type='email' />
  							<p>Придумайте логин</p>
  							<input required type='text' />
  							<p>Придумайте пароль</p>
  							<input required type='password' />
  							<p>Повторите пароль</p>
  							<input required type='password' />
  							<input type='button' value='Зарегистрироваться'/>
  						</form>
  					</div>
				</div>
			</div>
		);
	}
	updateLoginValue(evt) {
    	this.setState({
      		loginValue: evt.target.value
    	});
  	}
  	updatePasswordValue(evt) {
    	this.setState({
      		passwordValue: evt.target.value
    	});
  	}

}

export default Login;