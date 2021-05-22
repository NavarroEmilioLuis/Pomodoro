import React from 'react';
import { StyleSheet, Vibration, View } from 'react-native';
import Timer from './Timer';
import TimerButton from './TimerButton';
import ResetButton from './ResetButton';

export default class PomodoroTimer extends React.Component {
  state = {
    isRunning: false,
    isTaskWork: true,
    timerId: null,
    workSeconds: this.props.workTime,
    breakSeconds: this.props.breakTime,
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
      isTaskWork: true,
      timerId: null,
      workSeconds: this.props.workTime,
      breakSeconds: this.props.breakTime
    });
  }

  updateTimer = () => {
    if (this.state.isTaskWork) {
      this.setState(prevState => {
        const seconds = prevState.workSeconds - 1;

        if (seconds === 0) {
          Vibration.vibrate();
          return {
            isTaskWork: false, 
            workSeconds: 0, 
            breakSeconds: this.props.breakTime
          };
        }

        return {workSeconds: seconds};
      });
    }
    else {
      this.setState(prevState => {
        const seconds = prevState.breakSeconds - 1;

        if (seconds === 0) {
          Vibration.vibrate();
          return {
            isTaskWork: true, 
            workSeconds: this.props.workTime, 
            breakSeconds: 0
          };
        }

        return {breakSeconds: seconds};
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Timer seconds={this.state.workSeconds} />
        <Timer seconds={this.state.breakSeconds} />
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
