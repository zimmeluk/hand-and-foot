import React from 'react';

/******************************************************************************
 * NameInput
 *****************************************************************************/
export default class NameInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleNameChange(e) {
    this.props.onNameChange(e)
  }
  
  handleSubmit(e) {
    this.props.onSubmitForm(e)
  }
  
  createInputs() {
    let inputs = []
    
    for(let i = 0; i < this.props.opVal; i++) {
      if(i % 2 === 0) {
        inputs.push(<h3>Group {(i + 2) / 2}</h3>)
      }
      const name = "player" + (i + 1)
      inputs.push(
        <div className="name-input">
          <label htmlFor={name}>Name: </label>
          <input name={name} type="firstname" aria-required="true" value={this.props.name} onChange={this.handleNameChange} required />
        </div>
      )
    }
    return inputs
  }
  
  render() {
    if(this.props.opVal === "None" || this.props.optionsSet === true) {
      return null
    } else {
      return (
        <form onSubmit={this.handleSubmit}>
          {this.createInputs()}
          <div>
            <button>Start Game</button>
          </div>
        </form>
      )
    }
  }
}