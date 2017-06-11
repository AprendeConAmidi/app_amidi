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
  }


  render(){
    return (
      <div>
        {this.state.questions[0]._id}
      </div>
    );
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
