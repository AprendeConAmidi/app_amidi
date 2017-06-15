import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PageSelectorAction from '../../actions/PageSelectorAction';
import "./levelPage-styles.css"

export class PageSelector extends React.Component {

  constructor(props, context) {
    super(props, context);

  }


  render(){
    console.log(this.props);
    return <div/>;
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
