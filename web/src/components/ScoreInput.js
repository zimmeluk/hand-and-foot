import React from 'react';

/******************************************************************************
 * ScoreInput
 *
 * ScoreInput can either be a checkbox, select box, or text box that accepts
 * an integer input depending on the score being kept.
 *
 * Props
 *  Player
 *  Round
 *  Category
 *****************************************************************************/
export default class ScoreInput extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // template
  }

  componentWillUnmount() {
    // template
  }

  scoreSelectChange(player, round, category, e) {
    if(this.props.inputType == 'checkbox') {
      this.props.scoreSelectChange(player, round, category, e.target.checked ? 1 : 0);
    } else if(this.props.inputType == 'select') {
      this.props.scoreSelectChange(player, round, category, e.target.value);
    } else {
      this.props.scoreSelectChange(player, round, category, e.target.value);
    }
  }

  render() {
    if(this.props.inputType == 'checkbox') {
      let checkBoxVal = this.props.playerObj[this.props.round][this.props.category] == 1 ? true : false;
      return <input type="checkbox" defaultChecked={checkBoxVal} onChange={(e) => this.scoreSelectChange(this.props.player, this.props.round, this.props.category, e)}></input>
    } else if (this.props.inputType == 'select') {
      return (
        <select value={this.props.playerObj[this.props.round][this.props.category]}
         onChange={(e) => this.scoreSelectChange(
           this.props.player, this.props.round, this.props.category, e)}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      );
    } else if (this.props.inputType == 'number') {
      return <input type="number" min="0" max="1000" value={this.props.playerObj[this.props.round][this.props.category]} onChange={(e) => this.scoreSelectChange(this.props.player, this.props.round, this.props.category, e)}></input>
    }
  }
}