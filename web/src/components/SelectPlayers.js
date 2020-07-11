import React from 'react';

/******************************************************************************
 * SelectPlayers
 *
 * Select the number of players that are playing hand and foot.
 * Choose between 4, 6, or 8 players.
 *****************************************************************************/
export default class SelectPlayers extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }
  
  handleSelectChange(e) {
    this.props.onSelectChange(e.target.value)
  }

  render() {
    if (this.props.optionsSet === false) {
      return (
        <div>
          <label>Number of Players: </label>
          <select 
            value={this.props.opVal}
            onChange = {this.handleSelectChange}
          >
            <option value="None">Choose...</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
          </select>
        </div>
      )
    } else {
        return null;
    }
  }
}