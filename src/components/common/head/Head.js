import React from 'react';
import './head.css';
class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {isMusic: true};

        this.renderChildren = this.renderChildren.bind(this);
        this.toggleMusic = this.toggleMusic.bind(this);
    }

  renderChildren() {/* pattern head */}


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
    this.setState(Object.assign({},this.state,{isMusic: !this.state.isMusic}));
  }

  componentDidMount() {
    if(this.state.isMusic) {
      window.addEventListener("visibilitychange", this.toggleMusic);
    }
  }

  componentWillUnmount() {
    /*
    if(this.state.isMusic) {
      window.removeEventListener("beforeunload", this.toggleMusic,true);
    }*/
  }

  render() {
        return (
          <div>
            <div>
              {this.getMusic()}
              <div className="top-bar">
                  <div className="angle-left-arrow"/>
                  <div className="title-head">
                    <img style={{width: "140px"}} src="../assets/logo.png" alt="Amidi logo"/>
                  </div>
                  <div className={this.state.isMusic ? "audio-toggler center-icon unmuted" : "audio-toggler center-icon muted"}  onClick={this.toggleMusic}/>
              </div>
            </div>
          </div>
        );
    }
}

export default Head;
