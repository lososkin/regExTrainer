import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import './SignIn.css'

class SignIn extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {password:'',username:'', password_error_message:'', username_error_message:'', error_message:''}
  }

  handleClick() {
    this.props.contentChange('SignUp');
  }

  handlePasswordChange(e) {
    this.setState({ error_message: '' });
    this.setState({ password_error_message: ''  });
    this.setState({ password: e.target.value  });
    if (e.target.value===''){
      this.setState({ password_error_message: 'Заполните поле для пароля!' });
    }
  }

  handleUsernameChange(e) {
    this.setState({ error_message: '' });
    this.setState({ username_error_message: ''  });
    this.setState({ username: e.target.value  });
    if (e.target.value===''){
      this.setState({ username_error_message: 'Заполните поле для логина!' });
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username!=='' && this.state.password!==''){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.state.username, password: this.state.password }),
        mode: 'cors'
      };
      fetch(this.props.host+"auth/api/login/",requestOptions)
      .then(res => res.json()).then(result => {
      if (result.token!==undefined){
        localStorage.setItem('token',result.token);
        localStorage.setItem('username',this.state.username);
	this.props.setUsername(this.state.username);	
	this.props.setIsAnon(false);
        this.props.contentChange('lessons');
	this.props.getLessons();
      }else{
        this.setState({ error_message: 'Нет такого пользователя!' });
      }
      } , error => {console.log(error);this.setState({ error_message: 'Что то пошло не так...' })});
    }else{
      if(this.state.username===''){
        if(this.state.password===''){
          this.setState({ error_message: 'Заполните поля для логина и пароля!' });
        }else{
          this.setState({ error_message: 'Заполните поле для логина!' });
        }
      }else{
        this.setState({ error_message: 'Заполните поле для пароля!' });
      }
      
    }
  }

  render() {
    return (
      <Form className="col-md-4 offset-md-4 margin-top" onSubmit={this.handleSubmit}>
        <h1>Войдите в аккаунт!</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Логин</Form.Label>
          <Form.Control type="username" onChange={this.handleUsernameChange} />
          <Form.Text className="red-text" >
          {this.state.username_error_message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" onChange={this.handlePasswordChange}/>
          <Form.Text className="red-text" >
          {this.state.password_error_message}
          </Form.Text>
        </Form.Group>

        <Form.Text className="text-muted" >
          Ещё не зарегистрированы? <span onClick={this.handleClick} className="link-like">Зарегистриуйтесь!</span>
        </Form.Text>
        <Form.Text className="red-text">
        {this.state.error_message}
        </Form.Text>
        <Button variant="primary" type="submit" className="margin-top" >
          Войти
        </Button>
      </Form>   
    );
  }
}

export default SignIn;

