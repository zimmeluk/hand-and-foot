import React from 'react';
import Player from './Player';

/******************************************************************************
 * Group
 * 
 * A group consists of two players.
 *****************************************************************************/
export default class Group extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // template
  }

  componentWillUnmount() {
    // template
  }

  render() {
    const player1 = this.props.player1;
    const player2 = this.props.player2;
    return (
      <div>
        <h3>Group {this.props.groupName}: {this.props.players[player1]["score"] + this.props.players[player2]["score"]}</h3>
        <Player player={this.props.players[player1]} />
        <Player player={this.props.players[player2]} />
      </div>
    );
  }
}