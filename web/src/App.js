import React from 'react';

import './style.css';
import SelectPlayers from './components/SelectPlayers';
import NameInput from './components/NameInput';
import Score from './components/Score';

/******************************************************************************
* HandAndFootApp
*****************************************************************************/
export default class HandAndFootApp extends React.Component {
 constructor(props) {
   super(props)

   this.state = {
     opVal: "None",
     players: [],
     optionsSet: false
   }

   this.handleSelectChange = this.handleSelectChange.bind(this)
   this.handleNameChange = this.handleNameChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
   this.scoreSelectChange = this.scoreSelectChange.bind(this)
   this.resetGame = this.resetGame.bind(this)
 }
 
 handleSelectChange(opVal) {
   this.setState( {opVal: opVal}, () => console.log(this.state.opVal) )
 }
 
 handleNameChange(event) {
   this.setState({
     players: {
       ...this.state.players,
       [event.target.name]: {
         name: event.target.value,
         score: 0,
         round1: {
           pick: 0,
           out: 0,
           black: 0,
           red: 0,
           wild: 0,
           points: 0,
           score: 0
         },
         round2: {
           pick: 0,
           out: 0,
           black: 0,
           red: 0,
           wild: 0,
           points: 0,
           score: 0
         },
         round3: {
           pick: 0,
           out: 0,
           black: 0,
           red: 0,
           wild: 0,
           points: 0,
           score: 0
         },
         round4: {
           pick: 0,
           out: 0,
           black: 0,
           red: 0,
           wild: 0,
           points: 0,
           score: 0
         }
       }
     }
   }, () =>
     console.log("Hey!"));
 }
 
 handleSubmit(event) {
   event.preventDefault();
   this.setState( {optionsSet: true}, () => console.log(this.state.optionsSet))

   console.log(this.state);
 }

 scoreSelectChange(player, round, category, val) {
   let roundSum = 0;
   let gameSum = 0;

   // sum the round score and save the state
   for(let score in this.state.players[player][round]) {
     let updVal = this.state.players[player][round][score];

     // if updated category, use updated score
     if (score === category) {
       updVal = val;
     }

     switch(score) {
       case "pick":
         roundSum += (updVal * 100);
         break;
       case "out":
         roundSum += (updVal * 100);
         break;
       case "black":
         roundSum += (updVal * 300);
         break;
       case "red":
         roundSum += (updVal * 500);
         break;
       case "wild":
         roundSum += (updVal * 2000);
         break;
       case "points":
         roundSum += parseInt(updVal);
         break;
       default:
         break;
     }
   }
   
   // sum the game score and save the state
   for(let gameRound in this.state.players[player]) {
     let roundScore = this.state.players[player][gameRound]["score"];

     // TODO: change state structure
     if(gameRound === "name" || gameRound === "score") {
       continue;
     }

     // if current round, use updated score
     if(gameRound === round) {
       roundScore = roundSum;
     }

     gameSum += roundScore;
   }

   this.setState({
     players: {
       ...this.state.players,
       [player]: {
         ...this.state.players[player],
         score: gameSum,
         [round]: {
           ...this.state.players[player][round],
           score: roundSum,
           [category]: val
         }
       }
     }
   });
 }

 resetGame() {
   var response = window.confirm("Are you sure you want to restart? The current game will be lost.");

   if(response) {
     this.setState({
       opVal: "None",
       players: [],
       optionsSet: false
     });
   }
 }
 
 render() {
   return (
     <div>
       <SelectPlayers
         opVal = {this.state.opVal}
         optionsSet = {this.state.optionsSet}
         onSelectChange = {this.handleSelectChange}
       />
       <NameInput 
         opVal = {this.state.opVal}
         optionsSet = {this.state.optionsSet}
         onNameChange = {this.handleNameChange}
         onSubmitForm = {this.handleSubmit}
       />
       <Score
         opVal = {this.state.opVal}
         players = {this.state.players}
         optionsSet = {this.state.optionsSet}
         scoreSelectChange = {this.scoreSelectChange}
       />

       {this.state.optionsSet === true &&
         <button onClick={this.resetGame}>Restart</button>
       }
     </div>
   )
 }
}