import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/images/ModelS.jpeg')}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subTitle}>Starting at 69000$</Text>
            </View>
            <StyledButton type="primary" constent={" Custom Order"} onPress={() => { console.warn("Custom order was pressed") }} />
            <StyledButton type="secondary" constent={"existing inventory"} onPress={() => { console.warn("Existing Inventory was placed") }} />
        </View>
    );
};
export default CarItem;
