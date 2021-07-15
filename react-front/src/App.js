import React from 'react';
import Header from './Header';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Lessons from './Lessons';
import Lesson from './Lesson';
class App extends React.Component {
	getLessons(){
		const requestOptions = {
			method: 'GET',
			headers: {'Content-Type':'application/json','Authorization':'Token '+localStorage.getItem('token')},
			mode: 'cors'
		};
		let resStatus;
		fetch(this.host+'tasks/api/tasks/',requestOptions).then(res=>{resStatus=res.status;return res.json();}).then(data=>{if (resStatus===200){this.setState({lessons:data})}});
	}
	goToLesson(id){
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type':'application/json','Authorization':'Token '+localStorage.getItem('token')},
			mode: 'cors',
			body: JSON.stringify({id:id})
		};
		let resStatus;
		fetch(this.host+'tasks/api/task/',requestOptions).then(res=>{resStatus=res.status;return res.json();}).then(data=>{if (resStatus===200){this.setState({lesson:data,content:'lesson'});};});
	}
	setIsAnon(is_anon){
		this.setState({is_anon:is_anon});
	}
	setUsername(username){
		this.setState({username:username});
	}
	contentChange(content_type){
		this.setState({content:content_type});
	}
	logOut(){
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type':'application/json'},
			mode: 'cors'
		};
		fetch(this.host+'auth/api/create_anon_user/',requestOptions).then(res=>res.json()).then(data=>{
			this.setState({username:data.username,is_anon:true});
			localStorage.setItem('token',data.token);
			localStorage.setItem('username',data.username);
			this.getLessons();
		});
		
	}
	constructor(props) {
		super(props);
		this.host = "https://185.233.83.199/";
		this.state = {is_anon:true, content:'lessons',username:'',lessons:[]};
		this.contentChange = this.contentChange.bind(this);
		this.setUsername = this.setUsername.bind(this);
		this.setIsAnon = this.setIsAnon.bind(this);
		this.logOut = this.logOut.bind(this);
		this.getLessons = this.getLessons.bind(this);
		this.goToLesson = this.goToLesson.bind(this);
	}
	render() {
		let content;
		if (this.state.content==='SignIn'){
			content=<SignIn getLessons={this.getLessons} setIsAnon={this.setIsAnon} host={this.host} setUsername={this.setUsername} contentChange={this.contentChange}></SignIn>;
		}
		if (this.state.content==='SignUp'){
			content=<SignUp getLessons={this.getLessons} setIsAnon={this.setIsAnon} host={this.host} setUsername={this.setUsername} contentChange={this.contentChange}></SignUp>;
		}
		if (this.state.content==='lessons'){
			content = <Lessons goToLesson={this.goToLesson} lessons={this.state.lessons}></Lessons>
		}
		if (this.state.content==='lesson'){
			content=<Lesson host={this.host} lesson={this.state.lesson}></Lesson>
		}
		return (
			<div>
				<Header getLessons={this.getLessons} logOut={this.logOut} contentChange={this.contentChange} username={this.state.username} is_anon={this.state.is_anon}></Header>
				{content}
			</div>
		);
	}
	componentDidMount(){
		const requestOptions = {
			method: 'POST',
			headers: {'Content-Type':'application/json', 'Authorization':'Token '+localStorage.getItem('token')},
			mode: 'cors'
		};
		fetch(this.host+"auth/api/checktoken/",requestOptions).then(res => {
			if (res.ok) {
				this.getLessons();
				return res.json();
			}else {
				throw new Error('lol');
			}
		}).then(result=>{
			this.setState({username:localStorage.getItem('username')});
			if (!result.is_anon){
				this.setState({is_anon:false});
			}
		}).catch(error => {
			const reqOpt = {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				mode: 'cors'
			}
			fetch(this.host+"auth/api/create_anon_user/",reqOpt).then(res=>res.json()).then(data=>{
				localStorage.setItem('token',data.token);
				localStorage.setItem('username',data.username);
				this.setState({username:data.username});
				this.getLessons();
			});
		});
	}
}

export default App;
