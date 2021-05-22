import React from 'react';
import { StyleSheet, View } from 'react-native';
import PomodoroTimer from './components/PomodoroTimer'

export default class App extends React.Component {
  state = {
    workTime: 5 * 0.60,
    breakTime: 5 * 0.60,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
