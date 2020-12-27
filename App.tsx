import 'react-native-gesture-handler';
import * as React              from 'react';
import AuthenticationNavigator from './src/navigators/AuthenticationNavigator'
import LoadAssets              from "./src/components/LoadAssets";
import {ThemeProvider}         from "@shopify/restyle";
import theme                   from './Theme'

const fonts = {
    "SFProText-Bold"    : require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-SemiBold": require("./assets/fonts/SF-Pro-Text-SemiBold.otf"),
    "SFProText-Regular" : require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

export default function App() {
    return (
        <ThemeProvider {...{theme}}>
            <LoadAssets {...{fonts}}>
                <AuthenticationNavigator/>
            </LoadAssets>
        </ThemeProvider>
    );
}
