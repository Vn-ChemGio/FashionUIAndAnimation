import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {RectButton} from "react-native-gesture-handler";

interface ButtonProps {
    variant: "default" | "primary",
    label: string,
    onPress: () => void
}

const Button = ({variant, label, onPress}: ButtonProps) => {
    const backgroundColor = variant === "primary" ? "#2CB9B0" : "rgba(12,13,52,0.05)";
    const color = variant === "primary" ? "white" : "#0C0D34";
    return (
        <RectButton
            style={[styles.container, {backgroundColor}]}
            {...{onPress}}
        >
            <Text style={[styles.label, {color}]}> {label}</Text>
        </RectButton>
    );
};

Button.defaultProp = {variant: "default"}
export default Button;
const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: 50,
        width: 230,
        justifyContent: "center",
        alignItems: "center"

    },
    label: {
        fontSize: 15,
        fontFamily: "SFProText-Regular",
        textAlign: "center"
    }
})
