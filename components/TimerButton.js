import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TimerButton(props) {
  if (props.isRunning)
    return <StopButton onPress={props.stop} />
  else
    return <StartButton onPress={props.start} />
}

function StopButton(props) {
  return (
    <View style={styles.container}>
      <Button 
        title="Stop" 
        color="#d00" 
        style={styles.button} 
        onPress={props.onPress} 
      />
    </View>
  )
}

function StartButton(props) {
  return (
    <View style={styles.container}>
      <Button 
        title="Start" 
        color="#000" 
        style={styles.button} 
        onPress={props.onPress} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});