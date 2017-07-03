import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManagerQuiz from './ManagerQuiz';
import "./levelPage-styles.css"

export class LevelPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      questionsLevel: []
    };
    if(this.state.questionsLevel.length >0) {
      this.currentQuestion = this.state.questionsLevel[0];
    }

    this.updateAnswer = this.updateAnswer.bind(this);
  }


  componentWillReceiveProps(nextProps){
    this.state = {
      questionsLevel: Object.assign([], nextProps.questionsLevel)
    };
      this.currentQuestion = this.state.questionsLevel[0];
  }

  updateAnswer(event, answer){

  }

  render(){

    if(this.currentQuestion) {
      return (
        <div className="text-center">
          {this.props.level}
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
  questionsLevel: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  const level = ownProps.params.level;
  const managerQuiz = new ManagerQuiz();

  return {
    questionsLevel: managerQuiz.filterForLevel(level,state.questions)
  };
}

function mapDispatchToProps(dispatch) {
  /*
  return {
    actions: bindActionCreators(PageLevelAction, dispatch)
  };
  */
}


export default connect(mapStateToProps,mapDispatchToProps)(LevelPage);
