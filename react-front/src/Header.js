import React from 'react';
import './Header.css';
import { Button } from 'react-bootstrap';
class Header extends React.Component {
  constructor(props){
  	super(props);
	this.goToSignInPage = this.goToSignInPage.bind(this);
	this.logOut = this.logOut.bind(this);
	this.goToLessons = this.goToLessons.bind(this);
  }
  goToSignInPage(){
	  this.props.contentChange('SignIn');
  }
  logOut(){
	  this.props.logOut();
  }
  goToLessons(){
	  this.props.getLessons();
	  this.props.contentChange('lessons');
  }
  render() {
	  let button;
	  if (this.props.is_anon){
		  button = <Button onClick={this.goToSignInPage} variant="outline-dark" className="shadow-none col-md-2 col-6">Войти</Button>;
	  }else{
		  button = <Button onClick={this.logOut} variant="outline-dark" className="col-md-2 col-6 shadow-none">Выйти</Button>;
	  }
	  return (
	  	<div>
	  		<div className="conta">
		  		<div className="container">
		  		<div className="row">
				<div className="col-md-2 appname" onClick={this.goToLessons}>RegExTrainer</div>
		  		<div className="col-md-5"></div>
		  		<div className="header-username col-md-3 col-6">{this.props.username}</div>
		  		{button}	
		  		</div>
		  		</div>
		  	</div>
	  		<div className="cherta"></div>
	  	</div>
  	  );
  }

}

export default Header;
