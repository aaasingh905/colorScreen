import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorsScreen from "./screens/colorsScreen";

const reducer = (state, action) => {

  switch(action.type) {
    case 'red':
      if(state.red + action.payload >255 || state.red + action.payload < 0){
        return state;
      }
      return {
        ...state,red:state.red + action.payload
      }
    case 'green':
      if(state.green + action.payload >255 || state.green + action.payload < 0){
        return state;
      }
      return {
        ...state,green:state.green + action.payload
      }
    case 'blue':
      if(state.blue + action.payload >255 || state.blue + action.payload < 0){
        return state;
      }
      return {
        ...state,blue:state.blue + action.payload
      }
    default:
      return state;
    
  }
};
export default function App() {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const {red,green,blue} = state;
   return (
    <View>
      <ColorsScreen
        title="Red"
        onIncrease={() => {
           dispatch({type:'red', payload:15});

        }}
        onDecrease={() => {
          dispatch({type:'red', payload:-1 *  15})
        }}
      />
      <ColorsScreen
        title="Green"
        onIncrease={() => {
          dispatch({type:'green', payload:15});

        }}
        onDecrease={() => {
          dispatch({type:'green', payload:-1 *  15})

        }}
      />
      <ColorsScreen
        title="Blue"
        onIncrease={() => {
          dispatch({type:'blue', payload:15});

        }}
        onDecrease={() => {
          dispatch({type:'blue', payload:-1 *  15})

        }}
      />
      <View
        style={{
          height: 150,
          alignSelf:'streach',
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
