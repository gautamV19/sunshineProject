import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Card(props) {
  const handleGraph = ()=>{
    props.showGraph(props.data);
  }
  return (
      <View>
        <View style={styles.container}>
          <View>
            <Text style={styles.heading}>{props.name}</Text>
            <Text style={styles.desc}>{props.discription}</Text>
          </View>
          <View style={styles.btnHolder}>
            <Button title="Go to Plot" style={styles.plotButton} onPress={handleGraph}></Button>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: "serif",
    fontWeight: "bold",
    textDecorationLine: "underline"
  },
  desc: {
  },
  container: {
    padding: "5%",
    margin: "5%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  btnHolder: {
    marginTop: "10%",
  }

})

export default Card;