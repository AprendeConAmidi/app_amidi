import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TurnOnOffMusicAction from '../../../actions/TurnOnOffMusicAction';
import './head.css';

export class Head extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        isMusic: this.props.isTurnOnMusic,
        isTurnOnMusic: this.props.isTurnOnMusic,
        isHidden: true
      };
      this.toggleMenu = this.toggleMenu.bind(this);
      this.toggleMenuElement = this.toggleMenuElement.bind(this);
      this.turnMusic = this.turnMusic.bind(this);
      this.toggleMusic = this.toggleMusic.bind(this);
    }

  componentDidMount() {
      window.addEventListener("visibilitychange", this.toggleMusic);
  }

  componentWillReceiveProps(nextProps){
    let newState = {
      isMusic: nextProps.isTurnOnMusic,
      isTurnOnMusic: nextProps.isTurnOnMusic
    };
    this.setState(Object.assign({}, this.state, newState));
  }

  getMusic(){
    if(this.state.isMusic){
      return(
        <audio id="audio-bg" preload="auto" autoPlay loop >
          <source src="../assets/audio/amidi-background.mp3"/>
          <source src="../assets/audio/amidi-background.ogg"/>
        </audio>);
    }
  }

  turnMusic(){
    this.props.actions.turnOffOnMusicAction(!this.state.isTurnOnMusic);
  }

  toggleMusic(){
    if(this.state.isTurnOnMusic) {
      this.setState(Object.assign({}, this.state, {isMusic: !this.state.isMusic}));
    }
  }

  toggleMenu(){
    this.setState(Object.assign({}, this.state, {isHidden: !this.state.isHidden}));
  }

  toggleMenuElement(event){
    if(event.currentTarget === event.target){this.toggle()}
  }

  render() {
        return (
          <div>
            <div>
              {this.getMusic()}
              <div className="top-bar">
                  <div id="btn-menu" className={this.props.isMenu ?"btn-menu btn-head-left" : "angle-left-arrow btn-head-left"} onClick={this.props.isMenu ? this.toggleMenu : browserHistory.goBack}/>
                  <div className="title-head">
                    <img style={{width: "140px"}} src="../assets/logo.png" alt="Amidi logo"/>
                  </div>
                  <div className={this.state.isMusic ? "audio-toggler center-icon unmuted" : "audio-toggler center-icon muted"}  onClick={this.turnMusic}/>
              </div>
            </div>
            <div id="drawer" className={this.state.isHidden ? "" : "background-drawer"}
                 onClick={this.toggleMenu}>
              <div className="drawer-panel panel"
                   style={this.state.isHidden ? {left: "-1000px"} :{left: "0%"}}>
                <div className="delete-progress">
                  <div className="trash"/>
                  <div className="delete-progress-font">borrar progreso</div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

Head.propTypes = {
  isTurnOnMusic: PropTypes.bool.isRequired,
  isMenu: PropTypes.bool,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    isTurnOnMusic: state.isTurnOnMusic,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TurnOnOffMusicAction, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Head);
