import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManagerQuiz from './ManagerQuiz';
import "./levelPage-styles.css"

const managerQuiz = new ManagerQuiz();
export class LevelPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      questionsLevel: [],
      currentQuestion: undefined,
      isShowModal: false,
      isSuccess: false,
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let currentQuestion = this.state.currentQuestion;

    let newState = {
      questionsLevel: Object.assign([], nextProps.questionsLevel),
      currentQuestion: !!currentQuestion ? currentQuestion: nextProps.questionsLevel[0],
    };
    this.setState(Object.assign({}, this.state, newState));
  }

  updateAnswer(answer){
    let isSuccess = (answer === this.state.currentQuestion.correctAnswer);
    this.setState(Object.assign({}, this.state, {isShowModal: true}, {isSuccess:isSuccess}));
  }

  updateLevel(){
    let indexCurrentQuestion =
      this.state.questionsLevel.indexOf(this.state.currentQuestion);
    let indexNextQuestion = indexCurrentQuestion+1 < this.state.questionsLevel.length
     ? indexCurrentQuestion+1 : 0;
    let newQuestionLevel = managerQuiz.updateQuestionForLevel(indexCurrentQuestion,this.state);

    let newState = {
      questionsLevel: newQuestionLevel,
      currentQuestion: this.state.questionsLevel[indexNextQuestion],
      isShowModal: false,
      isSuccess: false
    };
    this.setState(Object.assign({}, this.state, newState));
  }


  getContentModal(){
    if(this.state.isSuccess){
      return (<h2>Tu respuesta es correcta</h2>)
    }else{
      return (
        <div>
          <h2>Te equivocaste</h2>
          <h3><strong>{this.state.currentQuestion.correctAnswer}</strong></h3>
        </div>);
    }
  }

  render(){
    if(this.state.currentQuestion) {
      return (
        <div className="text-center">
          <h4>{this.state.currentQuestion.question}</h4>
          <ul>
            {this.state.currentQuestion.answers.map((answer) =>
              <li key={answer} className="answer" onClick={() => (this.updateAnswer(answer))}>
                {answer}
              </li>
            )}
          </ul>
          <div className={this.state.isShowModal ? "modal-class" : "hidden"} id="modal" aria-hidden="true">
            <div className={this.state.isSuccess ? "modal-dialog-class success" : "modal-dialog-class fail"}>
              <div className="modal-body-class">
                {this.getContentModal()}
              </div>
              <hr className={this.state.isSuccess ? "hr-success" : "hr-fail"}/>
              <div className="modal-footer-class">
                <button
                  className={this.state.isSuccess ? "btn-class center-block btn-success" : "btn-class center-block btn-fail"}
                  onClick={this.updateLevel}
                >
                  Continuar
                </button>
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
  if(!!ownProps.params) {
    const level = ownProps.params.level;

    return {
      questionsLevel: managerQuiz.filterForLevel(level, state.questions)
    };
  }else {
    return {};
  }
}

function mapDispatchToProps(dispatch) {
  /*
  return {
    actions: bindActionCreators(PageLevelAction, dispatch)
  };
  */
}

export default connect(mapStateToProps,mapDispatchToProps)(LevelPage);
