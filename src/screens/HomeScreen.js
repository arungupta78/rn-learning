import React from "react";
import { Text, StyleSheet, Button, View } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>

    <Button title="Goto BoxScreen" onPress={() => navigation.navigate('Box')}></Button>
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
