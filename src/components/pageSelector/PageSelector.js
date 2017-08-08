import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import  * as routesPath from "../../routePaths";
import "./pageSelector.css";
import HeadConnect from "../common/head/Head";

const imagesCategories = importAll(() =>(require.context('../../assets/categories', false, /\.(png|jpe?g|svg)$/)));

export class PageSelector extends React.Component{

  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: this.props.content.questions,
      categories: this.props.content.categories,
      levels: this.getLevels(this.props.content.categories),
      user: this.props.user
    };
    this.mountLevels = this.mountLevels.bind(this);
    this.updateAccessLevel = this.updateAccessLevel.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let newState = {
      questions: nextProps.content.questions,
      categories: nextProps.content.categories,
      levels: this.getLevels(nextProps.content.categories),
      user: nextProps.user
    };
    this.setState(Object.assign({},this.state, newState));
  }

  getLevels(categories) {
    let levels = [];
    categories.forEach((category) => {
      if (levels.indexOf(category.level) === -1) {levels.push(category.level);}
    });
    return levels;
  }

  updateAccessLevel(level){
    let disableCssClass = "disabled-category";
    if(level === '1'){return "";}
    if(this.state.user && this.state.user.categoriesComplete){
      if(this.isLevelComplete(this.state.user, (level-1).toString(), this.state.categories)){
        return "";
      }
    }
    return disableCssClass;
  }

  isLevelComplete(user,level,categories){
    let categoryInLevel = 0;
    categories.forEach((category) => {
      if(level === category.level){categoryInLevel ++;}});
    let categoryCompleteInLevel = 0;
    user.categoriesComplete.forEach((categoryComplete)=> {
      if(categoryComplete.level === level){categoryCompleteInLevel ++;}
    });

    return categoryInLevel === categoryCompleteInLevel;
  }

  mountLevels() {
    return this.state.levels.map((level,index) =>
      <div key={level.toString()} className={(index%2 === 0) ? "level row-pair" : "level"}>{
        this.state.categories.map((category) => {
          if (category.level === level) {
            return (
              <div key={category.name} id={category.name} className="category" >
                <Link to={routesPath.LEVEL_PAGE+"/"+category.name} className={this.updateAccessLevel(level)}>
                  <img src={getImageCategory(category.image)}
                       className="img-responsive"
                  />
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
      <div >
        <HeadConnect isMenu={true}/>
        <h1 className="title">El Libro De La Historia Canaria</h1>
        <div id="levelsMount">{this.mountLevels()}</div>
      </div>
    );
  }

}

function importAll(r) {
  try{
    r = r();
    return r.keys().map(r);
  }catch(err){
    /*the catch is path for test, it is fine for now*/
    return [];
  }
}
function getImageCategory(nameImage){
  return imagesCategories.filter((imageCategory) => (imageCategory.includes(nameImage)))[0];
}


PageSelector.propTypes = {
  content: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    content: state.content,
    user: state.user
  };
}

export default connect(mapStateToProps, () => ({}))(PageSelector);
