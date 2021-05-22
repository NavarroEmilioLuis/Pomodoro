import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Returns string of mm:ss given an amount of seconds
const formatSeconds = totalSeconds => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - (minutes * 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}`: minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}`: seconds;
  return `${formattedMinutes}:${formattedSeconds}`;
};

export default function Timer(props) {
  const red = props.seconds === 0 ? styles.red : styles.black;

  return (
    <View style={styles.container}>
      <Text style={[styles.text, red]}>{formatSeconds(props.seconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 10,
    borderWidth: 4,
    borderColor: "#000",
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold"
  },
  red: {
    color: "#e00"
  },
  black: {
    color: "#000"
  }
});