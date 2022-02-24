import React from 'react'
import {
    View,
    Animated,
    StyleSheet,
    ViewStyle,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    bgColor?: any
    flex?: Animated.Value | number 
}

export const BOTTOMLEFTRADIUS = 35

const BotLeftCurvedContainer = ({children, flex, bgColor}: props ) => {
    return (
        <Animated.View style = {[{flex: flex || 1}, styles.backContainer,]}>
            <Animated.View style = {[styles.mainContainer, bgColor]}>
                {children}
            </Animated.View>
        </Animated.View>
    )
}

export default BotLeftCurvedContainer

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#559b45',
        borderBottomLeftRadius: BOTTOMLEFTRADIUS,
    },
    backContainer: {
        backgroundColor: 'white',
    },
})
