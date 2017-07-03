import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PageLevelAction from '../../actions/LevelPageAction';
import "./levelPage-styles.css"

export class LevelPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: []
    };
    if(this.state.questions.length >0) {
      this.currentQuestion = this.state.questions[0];
    }

    this.updateAnswer = this.updateAnswer.bind(this);
  }

  filterForLevel(category, allQuestions){
    const NUM_MAX_QUESTION = 10;
    let filterQuestions;
    filterQuestions = allQuestions.filter((question) => question.category === category);
    filterQuestions = this.sortRandomArray(filterQuestions).slice(0,NUM_MAX_QUESTION);

    return filterQuestions;
  }

  sortRandomArray(questions){
  let numberLoop = 50;
  for(let i =0; i < numberLoop; i++){
    questions = this.sortRandom(questions);
  }
  return questions;
}


  sortRandom(questions){
  let max = questions.length - 1;
  let min = 0;

  let firstPosition = parseInt(Math.floor(Math.random() * (max - min) + min));
  let secondPosition = parseInt(Math.floor(Math.random() * (max - min) + min));

  let tempQuestion = questions[firstPosition];
  questions[firstPosition] = questions[secondPosition];
  questions[secondPosition] = tempQuestion;

  return questions;
}




  componentWillReceiveProps(nextProps){
    this.state = {
      questions: Object.assign([],
        this.filterForLevel("Pastoreo y Cereal 2", nextProps.questions))
    };
      this.currentQuestion = this.state.questions[0];
  }

  updateAnswer(event, answer){

  }

  render(){
    if(this.currentQuestion) {
      return (
        <div className="text-center">
          <h4>{this.currentQuestion.question}</h4>
          <ul>
            {this.currentQuestion.answers.map((answer) =>
              <li key={answer} className="answer" onClick={this.updateAnswer}>
                {answer}
              </li>
            )}
          </ul>
          <div className="modal-class container-fluid" id="modal-one" aria-hidden="true">
            <div className="modal-dialog-class ">
              <div className="modal-body-class">
                <p>One modal example here! :D</p>
              </div>
              <div className="modal-footer-class">
                <button className="btn-class center-block">Nice!</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div/>;
  }

}

LevelPage.propTypes = {
  questions: PropTypes.array
};

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PageLevelAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(LevelPage);
