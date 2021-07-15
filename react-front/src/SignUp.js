import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './SignUp.css'
class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePassword2Change = this.handlePassword2Change.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {error_message:'',username_error_message:'',password_error_message:'',password2_error_message:'', password:'', password2:'',username:''}
  }

  handleClick() {
    this.props.contentChange('SignIn');
  }

  handlePasswordChange(e) {
    this.setState({ error_message: '' });
    this.setState({ password_error_message: ''  });
    this.setState({ password2_error_message: ''  });
    this.setState({ password: e.target.value  });
    
    if (e.target.value.length<6){
      this.setState({ password_error_message: 'Минимальная длинна пароля 6 символов.' });
      this.setState({ password2_error_message: '' });
    }
    if (e.target.value.length>100){
      this.setState({ password_error_message: 'Максимальная длинна пароля 100 символов.' });
      this.setState({ password2_error_message: '' });
    }
    if (e.target.value===''){
      this.setState({ password_error_message: 'Заполните поле для пароля!' });
      this.setState({ password2_error_message: '' });
    }
    if(e.target.value.length>=6 && e.target.value.length<=100 && this.state.password2!==e.target.value && this.state.password2!=='' ){
      this.setState({ password2_error_message: 'Пароли не совпадают!' }); 
    }
  }
  
  handlePassword2Change(e) {
    this.setState({ error_message: '' });
    this.setState({ password2_error_message: '' });
    if(this.state.password_error_message===''){
      this.setState({ password2: e.target.value  });
      if (e.target.value==='' && this.state.password!==''){
        this.setState({ password2_error_message: 'Повторите введенный пароль!' });
      }
      if(e.target.value!==this.state.password && this.state.password!==''){
        this.setState({ password2_error_message: 'Пароли не совпадают!' });
      }
    }
  }

  handleUsernameChange(e) {
    this.setState({ error_message: '' });
    this.setState({ username: e.target.value  });
    if (e.target.value===''){
      this.setState({ username_error_message: 'Заполните поле для логина!' });
    }else {
      if(e.target.value.length>32){
        this.setState({ username_error_message: 'Максимальная длина логина 32 символа!' });
      }else{
        this.setState({ username_error_message: ''  });
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!(this.state.username.includes('AnonUser')) && this.state.username.length<=32 && this.state.username!=='' && this.state.password!=='' && this.state.password===this.state.password2 && this.state.password.length>=6 && this.state.password.length<=100){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Authorization':'Token '+localStorage.getItem('token') },
        body: JSON.stringify({ username: this.state.username, password: this.state.password }),
        mode: 'cors'
      };
      fetch(this.props.host+"auth/api/signup/",requestOptions)
      .then(res => res.json()).then(result => {
      if (result.error==='User with same username already exists.'){
        this.setState({ error_message: 'Такой логин уже существует!' });
      }else{
        if(result.detail==='ok'){
          localStorage.setItem('username',this.state.username);
	  this.props.setIsAnon(false);
	  this.props.setUsername(this.state.username);
	  this.props.getLessons();
          this.props.contentChange('lessons');
        }else{
	console.log(result);
        this.setState({ error_message: 'Что то пошло не так...' });}
      }
      } , error => this.setState({ error_message: 'Что то пошло не так...' }));
    }else{
      if(this.state.password!==this.state.password2){
        this.setState({ error_message: 'Пароли не совпадают!' });
      }
      if(this.state.password.length<6){
        this.setState({ error_message: 'Минимальная длинна пароля 6 символов!' });
      }
      if(this.state.password.length>100){
        this.setState({ error_message: 'Максимальная длинна пароля 100 символов!' });
      }
      if(this.state.username.length>32){
        this.setState({ error_message: 'Максимальная длинна логина 32 символа!' });
      }
      if(this.state.password===''){
        this.setState({ error_message: 'Пароль не может быть пустым!' });
      }
      if(this.state.username===''){
        this.setState({ error_message: 'Логин не может быть пустым!' });
      }
      if(this.state.username.includes('AnonUser')){
        this.setState({ error_message: 'Логин не может содержать фразу AnonUser!' });
      }
    }
  }


  render() {
    return (
      <Form className="col-md-4 offset-md-4 margin-top" onSubmit={this.handleSubmit}>
        <h1>Регистрация</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Придумайте логин</Form.Label>
          <Form.Control type="text" autoComplete="off" onChange={this.handleUsernameChange}/>
          <Form.Text className="red-text" >
            {this.state.username_error_message}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" onChange={this.handlePasswordChange} />
          <Form.Text className="red-text" >
            {this.state.password_error_message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        </Form.Group>

        <Form.Group controlId="formBasicPassword2">
          <Form.Label>Повторите пароль</Form.Label>
          <Form.Control type="password"  onChange={this.handlePassword2Change}/>
          <Form.Text className="red-text" >
            {this.state.password2_error_message}
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        </Form.Group>
        
        <Form.Text className="text-muted">
          Уже зарегистрированы? <span className="link-like" onClick={this.handleClick}>Войдите в аккаунт!</span>
        </Form.Text>
        <Form.Text className="red-text" >
          {this.state.error_message}
        </Form.Text>
        <Button variant="primary" type="submit" className="margin-top" >
          Зарегистрироваться
        </Button>
      </Form>   
    );
  }
}

export default SignUp;
