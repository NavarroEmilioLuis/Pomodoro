import React from 'react';
import { StyleSheet, View } from 'react-native';
import PomodoroTimer from './components/PomodoroTimer'

export default class App extends React.Component {
  state = {
    timerOne: 25 * 0.60,
    timerTwo: 5 * 0.60,
  }

  render() {
    return (
      <PomodoroTimer 
        timerOne={this.state.timerOne} 
        timerTwo={this.state.timerTwo} 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
