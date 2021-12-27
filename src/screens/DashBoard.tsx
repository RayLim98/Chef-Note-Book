import React, { useRef, useState, useEffect} from 'react'
import {
    View,
    Animated,
    Text,
} from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'
import MainContainer from '../components/containers/MainContainer'
import chef_icon from '../assets/chef.png';

interface Props {
    navigation?: any
}

const DashBoard = (props: Props) => {
    const viewSizeAni = useRef(
        new Animated.Value(0.2)
        ).current

    useEffect(() => {
        Animated.timing(viewSizeAni, {
                toValue: 7,
                duration: 1000,
                useNativeDriver: false,
            }
        ).start()
    }, [])

    return (
        <MainContainer
            scale={viewSizeAni}
            children1={
                <View>
                    <Text>
                        hello
                    </Text>
                </View>
            }
        />
    )

}

export default DashBoard
