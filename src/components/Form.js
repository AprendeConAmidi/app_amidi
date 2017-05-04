import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FormAction from '../actions/FormAction';

import ManagerInputEmail from './ManagerInputEmail';

export class Form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.hiddenAdd = false;
    this.hiddenRemove = this.props.emails.length === 0;

    this.state = {
      emails: Object.assign([], this.props.emails)
    };

    this.resetManagerInputs = this.resetManagerInputs.bind(this);
  }

  _createInputEmailRow(){
    let emails = this.state.emails;
    if(emails.length === 0){emails = [""];}

    let i = 0;
    return emails.map(email =>
      <ManagerInputEmail
        key={i++}
        hiddenAdd={this.hiddenAdd}
        resetManagerInputs={this.resetManagerInputs}
        oneInput={emails.length === 1}
        email={email}/>
    );
  }

  resetManagerInputs(){
    let newEmails = Object.assign([], this.state.emails);
    newEmails = newEmails.slice(newEmails, 1);
    this.setState({emails: newEmails});
  }

  componentWillReceiveProps(nextProps){
    this.setState({emails: Object.assign([], nextProps.emails)});
  }

  render(){
    return (
      <div className="container">
        <h1>Form email</h1>
        <form>
          {this._createInputEmailRow()}
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }

}

Form.propTypes = {
  emails: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    emails: state.emails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);

