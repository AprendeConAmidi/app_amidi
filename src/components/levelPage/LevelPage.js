import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PageLevelAction from '../../actions/LevelPageAction';
import "./levelPage-styles.css"

export class LevelPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: Object.assign([], this.props.questions)
    };
    if(this.state.questions.length >0) {
      this.currentQuestion = this.state.questions[0];
    }

    this.updateAnswer = this.updateAnswer.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.state = {
      questions: Object.assign([], nextProps.questions)
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
