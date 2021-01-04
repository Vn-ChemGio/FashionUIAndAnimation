import {DrawerNavigationProp} from "@react-navigation/drawer";
import {useNavigation}        from "@react-navigation/native";
import React                  from "react";
import {RectButton}           from "react-native-gesture-handler";

import {useTheme, Theme, Box, Text} from "../../layouts";
import {HomeRoutes}                  from "../../navigators";
import {RoundedIcon}                 from "../../components";


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

const DrawerItem = ({icon, color, label, ...props}: DrawerItemProps) => {
    const theme      = useTheme();
    const navigation = useNavigation<DrawerNavigationProp<HomeRoutes, "Home">>();
    return (
        <RectButton
            onPress={() =>
                "screen" in props
                ? navigation.navigate(props.screen)
                : props.onPress(navigation)
            }
            style={{borderRadius: theme.borderRadii.s}}
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