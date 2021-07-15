import React from 'react';
import {Table, Form, Button} from 'react-bootstrap';
import './Lesson.css';
class Lesson extends React.Component {
	  constructor(props) {
		  super(props);
		  this.handleClick = this.handleClick.bind(this);
		  this.state = {solutionSendingState:''};
	  }
	  handleClick(){
		  let userSolution = document.getElementById('solutionInput').value;
		  const requestOptions = {
			  method: 'POST',
			  headers: {'Content-Type':'application/json', 'Authorization':'Token '+localStorage.getItem('token')},
			  mode: 'cors',
			  body: JSON.stringify({id:this.props.lesson.id,solution:userSolution})
		  }
		  this.setState({solutionSendingState:'Отправка'});
		  let resStatus;
		  fetch(this.props.host+'tasks/api/solution/',requestOptions).then(res => {resStatus=res.status;return res.json();}).then(data => {
			  if(resStatus===200){
				  if(data.is_correct){
		  			this.setState({solutionSendingState:'Правильно!'});
				  }else{
		  			this.setState({solutionSendingState:'Ты не прав!'});
				  }
			  }else{
		  		this.setState({solutionSendingState:'Не удалось проверить решение!'});
			  }
		  });
	  }
  render() {
	  let tests=[];
	  for (var i=0;i<this.props.lesson.tests_example.length;i++){
		let key = 'False';
		if (this.props.lesson.tests_example[i].key)
		  key = 'True';
		tests.push(<tr key={i}><td width="80%" align="center">{this.props.lesson.tests_example[i].test}</td><td width="20%" align="center">{key}</td></tr>);
	  }
	  return(
		  <div>
		  <h2 align='center'>{this.props.lesson.name} </h2>
		  <div className='container'><div className='row'><div className='col-md-8 offset-md-2' align='center'>{this.props.lesson.description}</div></div></div>
		  <h4 align='center' className='examples-h4'>Примеры:</h4>
		  <div className="container" align='center'>
		  <Table striped bordered hover>
		  	<tbody>
		  		{tests}
		  	</tbody>
		  </Table>
		  </div>
		  <div className="container">
		  <Form>
			<Form.Group >
				<Form.Label>Ваш ответ:</Form.Label>
				<Form.Control id='solutionInput' as="textarea" rows={3} />
			</Form.Group>
		  	<span>{this.state.solutionSendingState}</span>
		  	<br/>
		  	<Button variant="primary" onClick={this.handleClick}>
		  		Отправить
		  	</Button>
		  </Form>
		  </div>
		  </div>
	  );
  }

}

export default Lesson;
