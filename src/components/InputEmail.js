import React, {PropTypes} from 'react';


const InputEmail = ({position ,email, addInput, removeInput, updateEmailState, hiddenButtonRemove}) => {
  return (<div>
    <input
      className="form-control"
      type="email"
      value={email}
      onChange={updateEmailState(position)}
    />
    <input type="button"
      className="btn"
      onClick={addInput}  value="+"/>

    <input type="button"
      className={hiddenButtonRemove ? "btn hidden" : "btn"}
      onClick={removeInput} value="-"/>
  </div>);
  };

InputEmail.propTypes = {
  position: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  addInput: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
  updateEmailState: PropTypes.func.isRequired,
  hiddenButtonRemove: PropTypes.bool.isRequired,
};

export default InputEmail;
