import React from 'react';

import {
    Box,
    Text,
    Theme
} from "../../../Theme";
import {Image}            from "react-native";
import {
    SCREEN_WIDTH,
    SPLASH_SCREEN_BORDER_RADIUS
}                         from "../../../Constants";
import {Button}           from "../../components";
import {BorderlessButton} from "react-native-gesture-handler";
import {
    Routes,
    StackNavigationProps
}                         from "../../components/Navigation";
import {useTheme}         from "@shopify/restyle";


const picture    = {
    src   : require('../OnBoarding/ImageSlider/5.png'),
    width : 1080,
    height: 1440
}
const OnBoarding = ({navigation}: StackNavigationProps<Routes, "Welcome">) => {
    const theme = useTheme<Theme>();

    return (
        <Box flex={1} backgroundColor="white">
            <Box
                flex={1}
                borderBottomRightRadius={theme.borderRadii?.xl || 75}
                backgroundColor="grey"
                alignItems="center"
                justifyContent="flex-end"
            >
                <Image
                    source={picture.src}
                    style={{
                        width : SCREEN_WIDTH - SPLASH_SCREEN_BORDER_RADIUS * 2,
                        height: (
                                    (
                                        SCREEN_WIDTH - SPLASH_SCREEN_BORDER_RADIUS * 2
                                    ) * picture.height
                                ) / picture.width
                    }}
                />
            </Box>
            <Box flex={1} borderBottomRightRadius={theme.borderRadii?.xl || 75}>
                <Box
                    backgroundColor="grey"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                />
                <Box
                    flex={1}
                    justifyContent="space-evenly"
                    alignItems="center"
                    backgroundColor="white"
                    borderTopLeftRadius={theme.borderRadii?.xl || 75}
                    padding="xl"
                >
                    <Text variant="title">Let's get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup for an amazing experience
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate('OnBoarding')}
                    />
                    <Button
                        label="Join us, it's Free"
                        onPress={() => navigation.navigate('OnBoarding')}
                    />
                    <BorderlessButton onPress={() => navigation.navigate('OnBoarding')}>
                        <Text variant="button" color="textDefault">Forgot password?</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    );
};

export default OnBoarding;
