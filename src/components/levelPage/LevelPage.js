import React from 'react';
import {connect} from 'react-redux';
import * as PageLevelAction from '../../actions/LevelPageAction'
import {bindActionCreators} from 'redux';

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

  updateAnswer(event, answer){

  }

  componentWillReceiveProps(nextProps){
    this.state = {
      questions: Object.assign([], nextProps.questions)
    };
      this.currentQuestion = this.state.questions[0];
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
        </div>
      );
    }
    return <div/>;
  }

}

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
