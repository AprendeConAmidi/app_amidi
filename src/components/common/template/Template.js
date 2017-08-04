import React from 'react';
import './template.css';
class Template extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.renderChildren = this.renderChildren.bind(this);
    }

  renderChildren() {/* pattern template */}

  render() {
        return (
          <div>
            <div>
              <audio id="audio-bg" preload="auto" >
                <source src="../assets/audio/amidi-background.mp3"/>
                <source src="../assets/audio/amidi-background.ogg"/>
              </audio>
              <div className="top-bar">
                  <div className="angle-left-arrow"/>
                  <div className="title-head">
                    <img style={{width: "140px"}} src="../assets/logo.png" alt="Amidi logo"/>
                  </div>
                  <div className="audio-toggler center-icon muted"/>
              </div>
            </div>
            <div>{this.renderChildren()}</div>
          </div>
        );
    }
}

export default Template;
