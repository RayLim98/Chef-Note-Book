import React, { useRef, useState, useEffect} from 'react'
import {
    View,
    Animated,
} from 'react-native'
import MainContainer from '../components/containers/MainContainer'

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
        />
    )
}

export default DashBoard
