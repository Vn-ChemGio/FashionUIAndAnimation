import React        from 'react';
import {StyleSheet} from 'react-native';
import {RectButton} from "react-native-gesture-handler";

import {userTheme} from "../layouts";
import {Text}      from '.'

interface ButtonProps {
    variant: "default" | "primary",
    label: string,
    onPress: () => void
}

const Button = ({variant, label, onPress}: ButtonProps) => {
    const theme           = userTheme();
    const backgroundColor = variant === 'primary' ? theme.colors.primary : theme.colors.grey;
    const color           = variant === 'primary' ? theme.colors.white : theme.colors.text;
    return (
        <RectButton
            style={[styles.container, {backgroundColor}]}
            {...{onPress}}
        >
            <Text variant="button" style={{color}}>{label}</Text>
        </RectButton>
    )
};

Button.defaultProps = {variant: "default"}

export default Button;
const styles = StyleSheet.create({
    container: {
        borderRadius  : 25,
        height        : 50,
        width         : 230,
        justifyContent: "center",
        alignItems    : "center",
    }
})
