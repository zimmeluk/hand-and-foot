import React from 'react';
import ScoreInput from './ScoreInput';

/******************************************************************************
 * RoundScore
 *****************************************************************************/
export default class RoundScore extends React.Component {
  constructor(props) {
    super(props);
    this.createInputs = this.createInputs.bind(this);
    this.scoreSelectChange = this.scoreSelectChange.bind(this);
    this.round = "round1";
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

  createInputs(category, type) {
    let table = []

    for(const player in this.props.players) {
      table.push(
        <td>
          <ScoreInput playerObj={this.props.players[player]} player={player} round={this.round}
                      category={category} inputType={type}
                      scoreSelectChange={this.scoreSelectChange}/>
        </td>
      )
    }

    return table;
  }

  playerNames() {
    let names = []
    
    for(const player in this.props.players) {
      names.push(<th>{this.props.players[player].name}</th>);
    }

    return names;
  }

  render() {
    return(
    <div>
      <h4>Scores</h4>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            {this.playerNames()}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Draw 22</th>
            {this.createInputs("pick", "checkbox")}
          </tr>
          <tr>
            <th scope="row">Out</th>
            {this.createInputs("out", "checkbox")}
          </tr>
          <tr>
            <th scope="row">Black Books</th>
            {this.createInputs("black", "select")}
          </tr>
          <tr>
            <th scope="row">Red Books</th>
            {this.createInputs("red", "select")}
          </tr>
          <tr>
            <th scope="row">Wild Books</th>
            {this.createInputs("wild", "select")}
          </tr>
          <tr>
            <th scope="row">Points</th>
            {this.createInputs("points", "number")}
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}