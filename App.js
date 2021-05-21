import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import TimerButton from './components/TimerButton';
import ResetButton from './components/ResetButton';

const timerOneInitial = 1 * 60;
const timerTwoInitial = 1 * 60;

export default class App extends React.Component {
  state = {
    isRunning: false,
    current: 1,
    timerId: null,
    timerOneSeconds: timerOneInitial,
    timerTwoSeconds: timerTwoInitial,
  }

  start = () => {
    const timerId = setInterval(this.updateTimer, 1000);
    this.setState({isRunning: true, timerId: timerId});
  }

  stop = () => {
    clearInterval(this.state.timerId);
    this.setState({isRunning: false, timerId: null});
  }

  reset = () => {
    clearInterval(this.state.timerId);
    this.setState({
      isRunning: false,
      current: 1,
      timerId: null,
      timerOneSeconds: timerOneInitial,
      timerTwoSeconds: timerTwoInitial
    });
  }

  getNextSeconds = (timer, seconds) => {
    if (seconds > 0)
      return seconds - 1;
    
    if (timer === 1)
      return timerOneInitial;
    else if (timer === 2)
      return timerTwoInitial;
  }

  getNextTimer = (timer, seconds) => {
    if (seconds !== 0)
      return timer;
    
    if (timer === 1)
      return 2;
    else if (timer === 2)
      return 1;
  }

  updateTimer = () => {
    const timer = this.state.current;

    if (timer === 1) {
      this.setState(prevState => {
        const seconds = this.getNextSeconds(timer, prevState.timerOneSeconds);
        const nextTimer = this.getNextTimer(timer, seconds);
        return ({current: nextTimer, timerOneSeconds: seconds});
      });
    } else if (timer === 2) {
      this.setState(prevState => {
        const seconds = this.getNextSeconds(timer, prevState.timerTwoSeconds);
        const nextTimer = this.getNextTimer(timer, seconds);
        return ({current: nextTimer, timerTwoSeconds: seconds});
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer seconds={this.state.timerOneSeconds} />
        <Timer seconds={this.state.timerTwoSeconds} />
        <TimerButton 
          isRunning={this.state.isRunning} 
          start={this.start}
          stop={this.stop}
        />
        <ResetButton onPress={this.reset} />
      </View>
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
