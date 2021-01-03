import React   from "react";
import {Image} from "react-native";

import {DrawerActions, CommonActions, useNavigation} from "@react-navigation/native";

import {Text, Box}                   from "../../layouts";
import {Header}                      from "../../components";
import {DRAWER_WIDTH}                from "../../../Constants";
import DrawerItem, {DrawerItemProps} from "./DrawerItem";


const aspectRatio = 750 / 1125;
const height      = DRAWER_WIDTH * aspectRatio;

export const assets = [require("../../../assets/drawer.png")];

const items: DrawerItemProps[] = [
    {
        icon  : "zap",
        label : "Outfit Ideas",
        screen: "Home",
        color : "primary",
    },
    {
        icon  : "heart",
        label : "Favorite Outfits",
        screen: "FavoriteOutfits",
        color : "drawer1",
    },
    {
        icon  : "user",
        label : "Edit Profile",
        screen: "EditProfile",
        color : "drawer2",
    },
    {
        icon  : "clock",
        label : "Transaction History",
        screen: "TransactionHistory",
        color : "drawer3",
    },
    {
        icon  : "settings",
        label : "Notification Settings",
        screen: "Settings",
        color : "drawer4",
    },
    {
        icon   : "log-out",
        label  : "Logout",
        onPress: (navigation) =>
            navigation.dispatch(
                CommonActions.reset({
                    index : 0,
                    routes: [{name: "Authentication"}],
                })
            ),
        color  : "secondary",
    },
];

const Drawer = () => {
    //const navigation = useNavigation();
    return (
        <Box flex={1}>
            <Box flex={0.2} backgroundColor="white">
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    borderBottomRightRadius="xl"
                    backgroundColor="secondary"
                >
                    <Header
                        title="Menu"
                        left={{
                            icon   : "x",
                            onPress: () => true // navigation.dispatch(DrawerActions.closeDrawer),
                        }}
                        right={{
                            icon   : "shopping-bag",
                            onPress: () => {
                            },
                        }}
                        dark
                    />
                </Box>
            </Box>
            <Box flex={0.8}>
                <Box flex={1} backgroundColor="secondary"/>
                <Box
                    position="absolute"
                    top={0}
                    right={0}
                    left={0}
                    bottom={0}
                    backgroundColor="background"
                    borderTopLeftRadius="xl"
                    borderBottomRightRadius="xl"
                    justifyContent="center"
                    padding="xl"
                >
                    <Box
                        position="absolute"
                        left={DRAWER_WIDTH / 2 - 50}
                        top={-50}
                        backgroundColor="primary"
                        width={100}
                        height={100}
                        style={{borderRadius: 50}}
                    />
                    <Box marginVertical="m" marginTop="xl">
                        <Text variant="title" textAlign="center">
                            Mike Peter
                        </Text>
                        <Text variant="body" textAlign="center">
                            mikepeter@gmail.com
                        </Text>
                    </Box>
                    {items.map((item) => (
                        <DrawerItem key={item.icon} {...item} />
                    ))}

                </Box>
            </Box>

            <Box
                backgroundColor="background"
                width={DRAWER_WIDTH}
                height={height * 0.61}
                overflow="hidden"
            >
                <Image
                    source={assets[0]}
                    style={{
                        width              : DRAWER_WIDTH,
                        height,
                        borderTopLeftRadius: 75,
                    }}
                />
            </Box>
        </Box>
    )
}
export default Drawer;
