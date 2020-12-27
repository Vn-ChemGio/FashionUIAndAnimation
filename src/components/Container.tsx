import React, {ReactNode}        from 'react'
import {
    Image,
    Dimensions,
    StyleSheet,
    Platform
}                                from 'react-native'
import {
    Box,
    Theme
}                                from '../../Theme'
import {useSafeAreaInsets}       from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Constants                 from "expo-constants";
import {useTheme}                from "@shopify/restyle";

export const assets            = [
    require('./assets/pattrens/1.jpg'),
    require('./assets/pattrens/2.png'),
    require('./assets/pattrens/3.png')
] as const;
const {width, height: wHeight} = Dimensions.get('window');
const aspectRatio              = 391 / 626;
const height                   = width * aspectRatio;
const isIOS                    = Platform.OS === 'ios';

interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;
    pattren: 0 | 1 | 2;
}

const Container = ({children, footer, pattren}: ContainerProps) => {

    const insets = useSafeAreaInsets();
    const theme  = useTheme<Theme>();
    const asset  = assets[pattren];

    return (
        <KeyboardAwareScrollView scrollEnabled={false}>
            <Box height={wHeight + (
                isIOS ? 0 : Constants.statusBarHeight
            )} backgroundColor="secondary">
                <Box backgroundColor="white">
                    <Box
                        borderBottomLeftRadius={theme.borderRadii?.xl}
                        overflow="hidden"
                        height={height * 0.60}
                    >
                        <Image
                            source={asset}
                            style={{
                                width,
                                height,
                                borderBottomLeftRadius: theme.borderRadii?.xl
                            }}
                        />
                    </Box>
                </Box>
                <Box flex={1} overflow="hidden">
                    <Image
                        source={asset}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            width,
                            height,
                            top: -height * 0.60
                        }}
                    />
                    <Box
                        flex={1}
                        borderRadius={theme.borderRadii?.xl}
                        backgroundColor="white"
                        borderTopLeftRadius={0}
                    >
                        {children}
                    </Box>
                </Box>
                <Box backgroundColor="secondary" paddingTop="m">
                    {footer}
                    <Box height={insets.bottom}/>
                </Box>
            </Box>
        </KeyboardAwareScrollView>
    )
}

export default Container