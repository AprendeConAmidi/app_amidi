import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as TurnOnOffMusicAction from '../../../actions/TurnOnOffMusicAction';
import * as UserAction from '../../../actions/UserAction';
import './head.css';
import soundBackgroundOgg from '../../../assets/audio/amidi-background.ogg';
// import soundBackgroundMp3 from '../../../assets/audio/amidi-background.mp3';
import imgLogoAmidi from '../../../assets/logo.png';

//var audioBackground static path, problem multiples HEAD instances
// eslint-disable-next-line
let audioBackground;

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
      this.updateMusic = this.updateMusic.bind(this);

      this.initAudioStatic();
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

  initAudioStatic(){
    if(!audioBackground) {
      audioBackground = new Audio;
      audioBackground.src = soundBackgroundOgg;
      audioBackground.loop = true;
    }
  }

  updateMusic(){
    this.state.isMusic ?  audioBackground.play() : audioBackground.pause();
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
    if(event.currentTarget === event.target){this.toggle();}
  }

  render() {
        return (
          <div>
            {this.updateMusic()}
            <div className="container-top-bar">
            <div className="top-bar">
                <div id="btn-menu" className={this.props.isMenu ?"btn-menu btn-head-left" : "angle-left-arrow btn-head-left"} onClick={this.props.isMenu ? this.toggleMenu : browserHistory.goBack}/>
                <div className="title-head">
                  <img style={{width: "140px"}} src={imgLogoAmidi} alt="Amidi logo"/>
                </div>
                <div className={this.state.isMusic ? "audio-toggler center-icon unmuted" : "audio-toggler center-icon muted"}  onClick={this.turnMusic}/>
            </div>
              </div>
            <div id="drawer" className={this.state.isHidden ? "" : "background-drawer"}
                 onClick={this.toggleMenu}>
              <div className="drawer-panel panel"
                   style={this.state.isHidden ? {left: "-1000px"} :{left: "0%"}}>
                <div className="delete-progress" onClick={this.props.actions.removeUserAction}>
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
    actions: bindActionCreators(Object.assign(TurnOnOffMusicAction, UserAction), dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Head);
