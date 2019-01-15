import React, { Component } from 'react';

// styles
import './animation.scss';

// assets
import letters from '../../../animationData';

class Animation extends Component {
  render() {
    return (
      <div className="animation">
        <div className="animation__letters">
          {letters.map(letter => {
            return (
              <img
                className="animation__letter"
                key={letter.id}
                src={letter.iconPath}
                alt={letter.title}
              />
            );
          })}
        </div>

      </div>
    );
  }
}

export default Animation;
