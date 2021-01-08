import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

const colorsScreen = (props) => {
  return (
    <View>
      <Button title={`More ${props.title}`} onPress={props.onIncrease}
        style={{ width: 120 }}
      />
      
      <Button style={{ width: 100}}
        title={`Less ${props.title}`}
        onPress={props.onDecrease}
      />
    </View>
  );
};

export default colorsScreen;
