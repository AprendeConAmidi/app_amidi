import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as PageSelectorAction from '../../actions/PageSelectorAction';
import  * as routesPath from "../../routePaths";
import "./pageSelector.css";


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

  componentWillReceiveProps(nextProps){
    let newState = {
      questions: nextProps.questions,
      categories: this.getCategories(nextProps.questions),
      levels: this.getLevels(nextProps.questions)
    };
    this.setState(Object.assign({},this.state, newState));
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
      <div key={level.toString()} name={level} className="level">{
        this.state.categories.map((category) => {
          if (this.isCategoryMountable(level, countCategories, category)) {
            countCategories.push(category);
            return (
              <div key={category.name} id={category.name} className="category">
                <Link to={routesPath.LEVEL_PAGE+"/"+category.name}>
                  <img src={"../../assets/categories/"+category.name+".png"} alt=""/>
                  <h4>{category.name}</h4>
                </Link>
              </div>
            );
          }})
      }</div>
    );
  }

  render() {
    return (
      <div>
        <h1 className="title">El Libro De La Historia Canaria</h1>
        <div id="levelsMount">{this.mountLevels()}</div>
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
