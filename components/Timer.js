import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { vibrate } from './vibrate';

const formatSeconds = totalSeconds => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - (minutes * 60);
  return `${minutes}:${seconds.toLocaleString(undefined, {minimumIntegerDigits: 2})}`;
};

export default function Timer(props) {
  const isZero = props.seconds === 0 ? true : false;
  const red = isZero ? styles.red : null;

  if (isZero)
    vibrate();
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
  }
});