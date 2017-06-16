import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PageSelectorAction from '../../actions/PageSelectorAction';


export class PageSelector extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: this.props.questions,
      categories: this.getCategories(this.props.questions),
      levels: this.getLevels(this.props.questions)
    };

    this.mountLevels = this.mountLevels.bind(this);
    this.isCategoryMountable = this.isCategoryMountable.bind(this);
  }

  getCategories(questions) {
    let categories = [];
    questions.forEach((question) => {
      if (categories.indexOf(question.category) === -1) {
        categories.push({
          name: question.category,
          level: question.level
        });
      }
    });
    return categories;
  }


  getLevels(questions) {
    let levels = [];
    questions.forEach((question) => {
      if (levels.indexOf(question.level) === -1) {
        levels.push(question.level);
      }
    });
    return levels;
  }


  isCategoryMountable(level, mountsItem, newCategory) {
    if (newCategory.level === level) {
      let categoryFilterMounts = mountsItem.filter((categoryMount) => categoryMount.name === newCategory.name);
      return categoryFilterMounts.length === 0;
    } else {
      return false;
    }
  }

  mountLevels() {
    let countCategories = [];

    return this.state.levels.map((level) =>
      <div key={level.toString()} name={level}>{
        this.state.categories.map((category) => {
          if (this.isCategoryMountable(level, countCategories, category)) {
            countCategories.push(category);
            return <div key={category.name} id={category.name}>{category.name}</div>;
          }
        })
      }</div>
    );
  }

  render() {
    return (
      <div id="levelsMount">
        {this.mountLevels()}
      </div>
    );
  }

}

PageSelector.propTypes = {questions: PropTypes.array};

function mapStateToProps(state) {
  return {questions: state.questions};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PageSelectorAction, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageSelector);
