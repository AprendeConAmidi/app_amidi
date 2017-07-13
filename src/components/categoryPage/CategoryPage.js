import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ManagerQuiz from './ManagerQuiz';
import * as CategoryAction from '../../actions/CategoryAction';
import "./CategoryPage-styles.css";
import  * as routesPath from "../../routePaths";

const managerQuiz = new ManagerQuiz();
export class CategoryPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      questionsCategory: this.props.questionsCategory || [],
      currentQuestion: this.props.questionsCategory ? this.props.questionsCategory[0]:  null,
      isShowModal: false,
      isSuccess: false,
    };

    this.updateAnswer = this.updateAnswer.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
    this.finishCategory = this.finishCategory.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let currentQuestion = this.state.currentQuestion;

    let newState = {
      questionsCategory: Object.assign([], nextProps.questionsCategory),
      currentQuestion: currentQuestion ? currentQuestion: nextProps.questionsCategory[0],
    };
    this.setState(Object.assign({}, this.state, newState));
  }

  updateAnswer(answer){
    let isSuccess = (answer === this.state.currentQuestion.correctAnswer);
    this.setState(Object.assign({}, this.state, {isShowModal: true}, {isSuccess:isSuccess}));
  }

  updateCategory() {
    let indexCurrentQuestion =
      this.state.questionsCategory.indexOf(this.state.currentQuestion);
    let indexNextQuestion = indexCurrentQuestion + 1 < this.state.questionsCategory.length
      ? indexCurrentQuestion + 1 : 0;
    let newQuestionCategory =
      managerQuiz.updateQuestionForLevel(indexCurrentQuestion,this.state.questionsCategory,this.state.isSuccess);
    if (newQuestionCategory.length !== 0) {
      this.nextQuestion(newQuestionCategory,indexNextQuestion);
    } else {this.finishCategory();}
  }

  nextQuestion(newQuestionCategory,indexNextQuestion){
    let newState = {
      questionsCategory: newQuestionCategory,
      currentQuestion: this.state.questionsCategory[indexNextQuestion],
      isShowModal: false,
      isSuccess: false
    };
    this.setState(Object.assign({}, this.state, newState));
  }

  finishCategory(){
    let categoriesComplete = Object.assign([],this.props.user.categoriesComplete);
    let newCategory = {
      name: this.props.category.name,
      level: this.props.category.level
    };
    if(!managerQuiz.isContainCategory(categoriesComplete,newCategory)) {
      categoriesComplete.push({
        name: this.props.category.name,
        level: this.props.category.level
      });
      let updateUser = {
        categoriesComplete:categoriesComplete
      };
      this.props.actions.saveCategoryAction(Object.assign({},this.props.user,updateUser));
    }
    this.props.router.push(routesPath.WINNER);
  }

  getContentModal(){
    if(this.state.isSuccess){
      return (<h2>Tu respuesta es correcta</h2>);
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
              <button
                className={this.state.isSuccess ? "btn-class btn-success" : "btn-class btn-fail"}
                onClick={this.updateCategory}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      );
    }
    return <div/>;
  }
}

CategoryPage.propTypes = {
  questionsCategory: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  if(ownProps.params) {
    const categoryName = ownProps.params.category;
    const category = state.content.categories.filter((category) => (category.name === categoryName))[0];
    return {
      questionsCategory: managerQuiz.filterForLevel(categoryName, state.content.questions),
      category: category,
      user: state.user
    };
  }else {
    return {};
  }
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(CategoryAction, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(CategoryPage);
