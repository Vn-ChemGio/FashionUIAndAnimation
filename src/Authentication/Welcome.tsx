import React from 'react';

import {
    Box,
    Button,
    Text,
}                         from "../components";
import {Image}            from "react-native";
import {
    SCREEN_WIDTH,
    SPLASH_SCREEN_BORDER_RADIUS
}                         from "../../Constants";
import {BorderlessButton} from "react-native-gesture-handler";
import {
    AuthenticationRoutes,
    StackNavigationProps
}                         from "../navigators/Navigation";


const picture    = {
    src   : require('./OnBoarding/ImageSlider/5.png'),
    width : 1080,
    height: 1440
}
const OnBoarding = ({navigation}: StackNavigationProps<AuthenticationRoutes, "Welcome">) => {

    return (
        <Box flex={1} backgroundColor="white">
            <Box
                flex={1}
                borderBottomRightRadius="xl"
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
            <Box flex={1}>
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
                    borderTopLeftRadius="xl"
                    padding="xl"
                >
                    <Text variant="title">Let's get started</Text>
                    <Text variant="body" textAlign="center">
                        Login to your account below or signup for an amazing experience
                    </Text>
                    <Button
                        variant="primary"
                        label="Have an account? Login"
                        onPress={() => navigation.navigate('Login')}
                    />
                    <Button
                        label="Join us, it's Free"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                    <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text variant="button" color="textDefault">Forgot password?</Text>
                    </BorderlessButton>
                </Box>
            </Box>
        </Box>
    );
};

export default OnBoarding;
