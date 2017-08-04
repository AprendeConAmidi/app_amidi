import React from 'react';
import { browserHistory } from 'react-router';
import './head.css';

class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          isMusic: true,
          isTurnOnMusic:true
        };

        this.turnMusic = this.turnMusic.bind(this);
        this.toggleMusic = this.toggleMusic.bind(this);
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

  toggleMusic(){
    if(this.state.isTurnOnMusic) {
      this.setState(Object.assign({}, this.state, {isMusic: !this.state.isMusic}));
    }
  }

  turnMusic(){
    this.setState(Object.assign({},this.state,{isMusic: !this.state.isMusic, isTurnOnMusic: !this.state.isTurnOnMusic}));
  }

  componentDidMount() {
      window.addEventListener("visibilitychange", this.toggleMusic);
  }

  render() {
        return (
          <div>
            <div>
              {this.getMusic()}
              <div className="top-bar">
                  <div className="angle-left-arrow" onClick={browserHistory.goBack}/>
                  <div className="title-head">
                    <img style={{width: "140px"}} src="../assets/logo.png" alt="Amidi logo"/>
                  </div>
                  <div className={this.state.isMusic ? "audio-toggler center-icon unmuted" : "audio-toggler center-icon muted"}  onClick={this.turnMusic}/>
              </div>
            </div>
          </div>
        );
    }
}

export default Head;
