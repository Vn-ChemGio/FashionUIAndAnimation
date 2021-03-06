import React, {useState} from 'react';

import {useTransition} from "react-native-redash";
import {sub}           from "react-native-reanimated";

import {HomeNavigationProps} from "../../navigators";
import {Box}                 from "../../layouts";
import {Header}              from "../../components";

import Card       from "./Card";
import Background from "./Background";
import Categories from "./Categories";

const cards = [
    {
        index : 3,
        source: require("../../../assets/ImageSlider/4.png"),
    },
    {
        index : 2,
        source: require("../../../assets/ImageSlider/3.png"),
    },
    {
        index : 1,
        source: require("../../../assets/ImageSlider/2.png"),
    },
    {
        index : 0,
        source: require("../../../assets/ImageSlider/1.png"),
    },
];
const step  = 1 / (
    cards.length - 1
);


const Home = ({navigation}: HomeNavigationProps<"Homes">) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const aIndex                          = useTransition(currentIndex);

    return (
        <Box flex={1} backgroundColor="white">
            <Header
                left={{icon: 'menu', onPress: () => navigation.openDrawer()}}
                right={{icon: 'shopping-bag', onPress: () => true}}
                title="Home"
            />

            <Categories />

            <Box flex={1}>
                <Background/>
                {cards.map(
                    ({index, source}) =>
                        currentIndex < index * step + step && (
                                         <Card
                                             key={index}
                                             position={sub(index * step, aIndex)}
                                             onSwipe={() => setCurrentIndex((prev) => prev + step)}
                                             {...{source, step}}
                                         />
                                     )
                )}
            </Box>
        </Box>
    );
}

export default Home;