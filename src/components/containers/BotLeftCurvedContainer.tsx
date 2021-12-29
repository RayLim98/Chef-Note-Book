import React from 'react'
import {
    View,
    Animated,
    StyleSheet,
    ViewStyle,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    style?: ViewStyle
    flex?: any
}

export const BOTTOMLEFTRADIUS = 35

const BotLeftCurvedContainer = ({children, flex, style}: props ) => {
    return (
        <Animated.View style = {[{flex: flex || 1}, styles.backContainer, style]}>
            <View style = {styles.mainContainer}>
                {children}
            </View>
        </Animated.View>
    )
}

export default BotLeftCurvedContainer

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#559b45',
        borderBottomLeftRadius: BOTTOMLEFTRADIUS,
        padding: 8,
    },
    backContainer: {
        backgroundColor: 'white',
    },
})
