import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ResetButton(props) {
  return (
    <View style={styles.container}>
      <Button 
        title="Reset" 
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