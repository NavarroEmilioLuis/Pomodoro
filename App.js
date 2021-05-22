import React from 'react';
import PomodoroTimer from './components/PomodoroTimer'

export default class App extends React.Component {
  state = {
    workTime: 25 * 60,
    breakTime: 5 * 60,
  }

  render() {
    return (
      <PomodoroTimer 
        workTime={this.state.workTime} 
        breakTime={this.state.breakTime} 
      />
    );
  }
}