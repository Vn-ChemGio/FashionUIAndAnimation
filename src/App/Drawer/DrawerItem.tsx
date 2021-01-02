import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { RectButton } from "react-native-gesture-handler";

import { RoundedIcon }      from "../../components";
import { HomeRoutes }       from "../../navigators";
import { Box, Theme, Text } from "../../../Theme";
import {useTheme}           from "@shopify/restyle";

interface BaseDrawerItem {
    icon: string;
    color: keyof Theme["colors"];
    label: string;
}

interface ScreenDrawerItem extends BaseDrawerItem {
    screen: keyof HomeRoutes;
}

interface OnPressDrawerItem extends BaseDrawerItem {
    onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}

export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
    const theme = useTheme<Theme>();
    const navigation = useNavigation<
        DrawerNavigationProp<HomeRoutes, "Home">
        >();
    return (
        <RectButton
            onPress={() =>{}
                // "screen" in props
                // ? navigation.navigate(props.screen)
                // : props.onPress(navigation)
            }
            style={{ borderRadius: theme.borderRadii.l }}
        >
            <Box flexDirection="row" alignItems="center" padding="s">
                <RoundedIcon
                    iconRatio={0.5}
                    name={icon}
                    size={36}
                    backgroundColor={color}
                    color="background"
                />
                <Text variant="button" color="secondary" marginLeft="m">
                    {label}
                </Text>
            </Box>
        </RectButton>
    );
};

export default DrawerItem;