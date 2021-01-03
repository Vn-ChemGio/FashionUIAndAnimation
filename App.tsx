import 'react-native-gesture-handler';
import * as React      from 'react';
import {ThemeProvider} from "@shopify/restyle";

import theme                            from './src/layouts';
import {assets as appAssets}            from './src/App';
import {assets as authenticationAssets} from './src/Authentication';

import AppNavigator from './src/navigators/AppNavigator'
import LoadAssets   from "./src/components/LoadAssets";

const fonts = {
    "SFProText-Bold"    : require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-SemiBold": require("./assets/fonts/SF-Pro-Text-SemiBold.otf"),
    "SFProText-Regular" : require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};


const assets = [...appAssets, ...authenticationAssets];

export default function App() {
    return (
        <ThemeProvider {...{theme}}>
            <LoadAssets {...{fonts, assets}}>
                <AppNavigator/>
            </LoadAssets>
        </ThemeProvider>
    );
}
