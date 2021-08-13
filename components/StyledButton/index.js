import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
const StyledButton = (props) => {
    const { type, constent, onPress } = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const color = type === 'secondary' ? '#171A20' : '#FFFFFFA6';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: color }]}>{constent}</Text>
            </Pressable>
        </View>
    );
};
export default StyledButton;
