import React from 'react';
import { ListGroup, Card, Badge } from 'react-bootstrap';
import './Lessons.css';
class Lessons extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(id) {
	  this.props.goToLesson(id);
  }

  render() {
    return (
      <ListGroup>
        {this.props.lessons.map(lesson => (
          lesson.is_solved===true ?
            <ListGroup.Item key={lesson.id} ><Card body onClick={() => this.handleClick(lesson.id) } className="clickable"><Badge pill variant="success">✓</Badge> {lesson.name}</Card></ListGroup.Item>
          :
            <ListGroup.Item key={lesson.id} ><Card body onClick={() => this.handleClick(lesson.id) } className="clickable">{lesson.name}</Card></ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default Lessons;
