import React from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import Timer from './components/Timer';
import TimerButton from './components/TimerButton';
import ResetButton from './components/ResetButton';

const timerOneInitial = 25 * 0.60;
const timerTwoInitial = 5 * 0.60;

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

  updateTimer = () => {
    const timer = this.state.current;
    
    if (this.state.timerOneSeconds === 0 && this.state.timerTwoSeconds === 0) {
      // Pomodoro timer finished
      this.reset();
    } else if (timer === 1) {
      this.setState(prevState => {
        const seconds = prevState.timerOneSeconds - 1;
        const nextTimer = seconds === 0 ? 2 : 1;
        if (seconds === 0)
          Vibration.vibrate();
        return ({current: nextTimer, timerOneSeconds: seconds});
      });
    } else if (timer === 2) {
      this.setState(prevState => {
        const seconds = prevState.timerTwoSeconds - 1;
        if (seconds === 0)
          Vibration.vibrate(1000);
        return ({timerTwoSeconds: seconds});
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
