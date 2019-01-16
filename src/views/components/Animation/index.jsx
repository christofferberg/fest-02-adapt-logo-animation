import React, { Component } from 'react';

// styles
// import './animation.scss';
import './donimation.scss';

// assets
import Outline from './Outline';
import animationLetters from '../../../animationData';

class Animation extends Component {
  render() {
    const animIntroClass = 'anim-intro';
    const animOutroClass = 'anim-outro';

    const startAnimation = () => {
      console.log('start animation');
      const letters = document.querySelector('.letters');
      letters.classList.add(animIntroClass);

      setTimeout(() => {
        letters.classList.add(animOutroClass);
        letters.classList.remove(animIntroClass);
      }, 1000);
    };

    const clearAnimation = () => {
      console.log('stop animation');
      const letters = document.querySelector('.letters');
      letters.classList.remove(animIntroClass, animOutroClass);
    };

    return (
      <div className="adapt-animation">

        <div className="logo">
          <div className="outline">
            <Outline></Outline>
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
            onClick={startAnimation}
            type="button"
            className="button button--start"
          >
            Start
          </button>

          <button
            onClick={clearAnimation}
            type="button"
            className="button button--start"
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Animation;
