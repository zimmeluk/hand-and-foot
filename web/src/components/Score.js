import React from 'react';
import Group from './Group';
import RoundScore from './RoundScore';

/******************************************************************************
 * Score
 *****************************************************************************/
export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.scoreSelectChange = this.scoreSelectChange.bind(this);
  }

  componentDidMount() {
    // template
  }

  componentWillUnmount() {
    // template
  }

  scoreSelectChange(player, round, category, val) {
    this.props.scoreSelectChange(player, round, category, val)
  }

  render() {
    if (this.props.optionsSet === false) {
      // do not render the score
      return null;
    } else {
      let scores = [];


      for(let i = 0; i < this.props.opVal; i += 2) {
        const name1 = "player" + (i + 1);
        const name2 = "player" + (i + 2);
        scores.push(
          <Group groupName={(i + 2) / 2} players={this.props.players} player1={name1} player2={name2} />
        )
      }

      return (
        <div>
          {scores}
          <RoundScore
            players={this.props.players}
            scoreSelectChange={this.scoreSelectChange} />
        </div>
      );
    }
  }
}