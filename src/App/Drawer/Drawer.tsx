import React from "react";

import {Image, View}                                       from "react-native";
import {DrawerContentComponentProps, DrawerContentOptions} from "@react-navigation/drawer";
import {Box, Text, Theme}                                         from "../../../Theme";
import Header                                              from "../../../layouts/Header";
import {SCREEN_WIDTH}                                      from "../../../Constants";
export const DRAWER_WIDTH = SCREEN_WIDTH * 0.75;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const assets = [require("../../../assets/drawer.png")];
const Drawer = () =>{

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
                            onPress: () => {
                            },
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
                <Box flex={1} backgroundColor="secondary" />
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
                        style={{ borderRadius: 50 }}
                    />
                    <Box marginVertical="m">
                        <Text variant="lTitle" textAlign="center">
                            Mike Peter
                        </Text>
                        <Text variant="body" textAlign="center">
                            mikepeter@gmail.com
                        </Text>
                    </Box>

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
                        width: DRAWER_WIDTH,
                        height,
                        borderTopLeftRadius: 75,
                    }}
                />
            </Box>
        </Box>
    )
}
export default Drawer;
