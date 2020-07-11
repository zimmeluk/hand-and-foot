import React from 'react';

/******************************************************************************
 * Player
 *
 * Arrow function component that displays information related to a player.
 *****************************************************************************/
const Player = ({player}) => {
  return (
    <div>
      <p className="player">{player.name}
        <span className="player-score"> {player.score}</span>
      </p>
    </div>
  );
};

export default Player;