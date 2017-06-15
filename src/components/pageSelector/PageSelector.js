import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PageSelectorAction from '../../actions/PageSelectorAction';
import "./levelPage-styles.css"



export class PageSelector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      questions : this.props.questions,
      categories : getCategories(this.props.questions)
    };
  }



  render(){
    return (
      <div>
        <div id="itemsLevelPage">
          {this.state.categories.map((category) => <div>{category}</div>)}
        </div>
      </div>
    );
  }

}

PageSelector.propTypes = {
  questions: PropTypes.array
};

function mapStateToProps(state) {
  return {
    questions: state.questions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PageSelectorAction, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(PageSelector);


function getCategories(questions){
  let categories  = [];
  questions.forEach((question) =>{
    if(categories.indexOf(question.category) === -1) {
      categories.push(question.category)
    }
  });
  return categories;
}
