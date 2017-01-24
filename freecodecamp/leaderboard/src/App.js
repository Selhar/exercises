import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Leaderboard/>
      </div>
    );
  }
}

class Leaderboard extends Component {
  render(){
    return (
      <div className="board">
        <header>Freecodecamp leaderboard </header>
        <table>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th>Points</th>
          </tr>
        </table>
      </div>
    )
  }
}



export default App;
