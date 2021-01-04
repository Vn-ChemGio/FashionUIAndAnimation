import React                                         from 'react';
import {View}                                        from "react-native";
import {RouteProp}                                   from "@react-navigation/native";
import {createDrawerNavigator, DrawerNavigationProp} from "@react-navigation/drawer";

import {DRAWER_WIDTH} from "../../Constants";
import {Home}         from "../App/Home";
import {Favorites}    from "../App/Favorites";
import DrawerContent  from "../App/Drawer/Drawer";

const AppDrawer = createDrawerNavigator<HomeRoutes>();

export type HomeRoutes = {
    Homes: undefined;
    Favorites: undefined;
    Notifications: undefined;
    Drawers: undefined;
}


const HomeNavigator = () => {
    return (
        <AppDrawer.Navigator drawerContent={props => <DrawerContent {...props} />} drawerStyle={{width: DRAWER_WIDTH}}>
            <AppDrawer.Screen name="Homes" component={Home}/>
            <AppDrawer.Screen name="Favorites" component={Favorites}/>
            <AppDrawer.Screen name="Notifications" component={NotificationsScreen}/>
        </AppDrawer.Navigator>
    );
};

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
