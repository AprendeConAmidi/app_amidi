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
      isShowModal: false,
      isSuccess: false,
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

  updateAnswer(answer){
    let isSuccess = (answer === this.currentQuestion.correctAnswer);
    this.setState(Object.assign({}, this.state, {isShowModal: true}, {isSuccess:isSuccess}));
  }

  getContentModal(){
    if(this.state.isSuccess){
      return (<h2>Tu respuesta es correcta</h2>)
    }else{
      return (
        <div>
          <h2>Te equivocaste</h2>
          <h3><strong>{this.currentQuestion.correctAnswer}</strong></h3>
        </div>);
    }
  }



  render(){
    if(this.currentQuestion) {
      return (
        <div className="text-center">
          <h4>{this.currentQuestion.question}</h4>
          <ul>
            {this.currentQuestion.answers.map((answer) =>
              <li key={answer} className="answer" onClick={() => (this.updateAnswer(answer))}>
                {answer}
              </li>
            )}
          </ul>
          <div className={this.state.isShowModal ? "modal-class container-fluid" : "hidden"} id="modal" aria-hidden="true">
            <div className={this.state.isSuccess ? "modal-dialog-class success" : "modal-dialog-class fail"}>
              <div className="modal-body-class">
                {this.getContentModal()}
              </div>
              <div className="modal-footer-class">
                <button className={this.state.isSuccess ? "btn-class center-block btn-success" : "btn-class center-block btn-fail"}>Continuar</button>
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
