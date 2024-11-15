import React, { useState } from 'react';
import { Heart } from 'lucide-react';

export default function Proposal() {
  const [showReaction, setShowReaction] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [noButtonMoved, setNoButtonMoved] = useState(false);

  const handleYesClick = () => {
    setShowReaction(true);
  };

  const handleNoHover = () => {
    if (!noButtonMoved) {
      setNoButtonMoved(true);
    }
    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 50);
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="proposal">
      <h1 className="title">Me Dearechhh Bebyyyy Jaaaaaaaaaan </h1>
      <p className="question">Do you Laaaaaaaaammmmmmmmmmmeeeeeeeeeee????</p>
      <div className="buttons">
        <button className="button yes-button" onClick={handleYesClick}>
          Yechhhhhhhhhhh, I do! <Heart className="heart-icon" />
        </button>
        <button
          className={`button ${noButtonMoved ? 'no-button-moved' : 'no-button'}`}
          style={
            noButtonMoved
              ? { position: 'absolute', left: noButtonPosition.x, top: noButtonPosition.y }
              : {}
          }
          onMouseEnter={handleNoHover}
        >
          No
        </button>
      </div>
      {showReaction && (
        <div className="reaction">
          <h2>Me love Jooooooooooo Molllllllllllllllllll </h2>
          <div className="floating-hearts">
            {[...Array(10)].map((_, index) => (
              <Heart key={index} className="floating-heart" style={{ animationDelay: `${index * 0.5}s` }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}