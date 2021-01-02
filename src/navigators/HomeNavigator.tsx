import React                                         from 'react';
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";
import {View}                                        from "react-native";
import DrawerContent                                 from "../App/Drawer/Drawer";
import {RouteProp}                                   from "@react-navigation/native";
import {DRAWER_WIDTH}                                from "../../Constants";

const AppDrawer = createDrawerNavigator<HomeRoutes>();

export type HomeRoutes = {
    Home: undefined;
    Notifications: undefined;
}


const HomeNavigator = () => {
    return (
        <AppDrawer.Navigator drawerContent={DrawerContent} drawerStyle={{width:DRAWER_WIDTH}}>
            <AppDrawer.Screen name="Home" component={HomeScreen}/>
            <AppDrawer.Screen name="Notifications" component={NotificationsScreen}/>
        </AppDrawer.Navigator>
    );
};


function HomeScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

        </View>
    );
}

function NotificationsScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "red"}}>
        </View>
    );
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
    navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
    route: RouteProp<HomeRoutes, RouteName>;
}


export default HomeNavigator;
