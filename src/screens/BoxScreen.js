import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BoxScreen() {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
};

const styles = StyleSheet.create({
    viewStyle: {
        // alignItems: 'flex-end',
        borderWidth: 3,
        borderColor: 'black',
        // flexDirection: 'row',
        // justifyContent:'space-evenly',
        height: 200
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:2,
        // alignSelf: 'stretch',
        // position: 'absolute',
        fontSize: 18,
        // left: 10
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:4
    }
});
