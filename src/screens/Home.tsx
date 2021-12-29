import React, { useRef, useState, useEffect} from 'react'
import {
    View,
    Animated,
    Text,
    Easing,
} from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import {BOTTOMLEFTRADIUS} from '../components/containers/BotLeftCurvedContainer'

interface Props {
    navigation?: any
}

const Home = (props: Props) => {
    const viewSizeAni = useRef( new Animated.Value(0.2)).current
    useEffect(() => {
        Animated.timing(viewSizeAni, {
                toValue: 30,
                duration: 1000,
                useNativeDriver: false,
            }
        ).start(()=> {
            console.log("Animation finished")
        })
    }, [])

    return (
        <MainContainer
            scale={viewSizeAni}
            // disableChild2 = {state}
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

export default Home
