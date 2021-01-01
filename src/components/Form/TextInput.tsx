import React, {forwardRef} from 'react'
import {
    TextInput as RNTextInput,
    StyleSheet,
    TextInputProps as RNTextInputProps
}                          from 'react-native'
import {
    Box,
    RoundedIcon,
    Theme
}                          from '..'
import {Feather as Icon}   from '@expo/vector-icons'
import {useTheme}          from "@shopify/restyle";

interface TextInputProps extends RNTextInputProps {
    icon: string;
    error?: string;
    touched?: boolean;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
    ({icon, touched, error, ...props}, ref) => {
        const  theme= useTheme<Theme>()
        const SIZE  = (
                          theme.borderRadii ? theme.borderRadii?.m | 10 : 10
                      ) * 2.5;

        const reColor = !touched ? "text" : (
            error ? "danger" : "primary"
        );
        const color   = theme.colors ? theme.colors[reColor] : 'white';

        return (
            <Box
                height={48}
                flexDirection="row"
                borderRadius="s"
                alignItems="center"
                borderColor={reColor}
                borderWidth={StyleSheet.hairlineWidth}
                marginBottom="m"
                padding="s"
            >
                <Box padding="s">
                    <Icon name={icon} size={16} {...{color}} />
                </Box>
                <Box flex={1}>
                    <RNTextInput
                        underlineColorAndroid="transparent"
                        placeholderTextColor={color}
                        {...{ref}}
                        {...props}
                    />
                </Box>
                {touched && (
                    <RoundedIcon
                        name={!error ? "check" : "x"}
                        size={SIZE}
                        color={"white"}
                        backgroundColor={!error ? "primary" : "danger"}
                    />
                )}
            </Box>
        )
    }
);

export default TextInput