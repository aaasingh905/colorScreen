import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorsScreen from "./screens/colorsScreen";

export default function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color,change)=>{
    if(color === 'red'){
      if(color + change > 255 || red + change < 0){
        return;
      }
      else{
        setRed( red + change)
      }
    }
    if(color === 'green'){
      if(color + change > 255 || green + change < 0){
        return;
      }
      else{
        setGreen( green + change)
      }
    }if(color === 'blue'){
      if(color + change > 255 || blue + change < 0){
        return;
      }
      else{
        setBlue( blue + change)
      }
    }


  }

  return (
    <View >
      <ColorsScreen
        title="Red"
        onIncrease={() => {
          setColor('red', 15);
        }}
        onDecrease={() => {
          setColor('red',-1 *  15);
        }}
      />
      <ColorsScreen
        title="Green"
        onIncrease={() => {
          setColor('green' , 15);
        }}
        onDecrease={() => {
          setColor('green' ,-1 * 15);
        }}
      />
      <ColorsScreen
        title="Blue"
        onIncrease={() => {
          setColor('blue', 15);
        }}
        onDecrease={() => {
          setColor('blue' , -1 * 15);
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
