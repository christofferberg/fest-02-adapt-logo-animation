import React, { Component } from 'react';

// styles
import './animation.scss';

// assets
import { animationLetters } from '../../../animationData';

const animStartClass = 'anim-start';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.animWrapper = React.createRef();
  }

  startAnimation = () => {
    console.log('Started animation');
    this.animWrapper.current.classList.add(animStartClass);
  };

  resetAnimation = () => {
    console.log('Reset animation');
    this.animWrapper.current.classList.remove(animStartClass);
  };

  render() {
    return (
      <div className="adapt-animation" ref={this.animWrapper}>
        <div className="animation">
          <div className="box"></div>

          <div className="outline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1205.5 1205.5">
              <g id="Layer_2" data-name="Layer 2">
                <g id="outline">
                  <path className="outline-path" d="M1205.5,1205.5H0V0H1205.5ZM10,1195.5H1195.5V10H10Z"/>
                </g>
              </g>
            </svg>
          </div>

          <div className="letters">
            {animationLetters.map(letter => {
              return (
                <img
                  className="letters__item"
                  key={letter.id}
                  src={letter.iconPath}
                  alt={letter.title}
                />
              );
            })}
          </div>
        </div>

        <div className="buttons">
          <button
            onClick={this.startAnimation}
            type="button"
            className="button button--start"
          >
            Start
          </button>

          <button
            onClick={this.resetAnimation}
            type="button"
            className="button button--stop"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Animation;
