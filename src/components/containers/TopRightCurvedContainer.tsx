import React from 'react'
import {
    View,
    StyleSheet,
    ViewStyle,
    Animated,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    bgColor?: ViewStyle
    flex?: number
}
const TopRightCurvedContainer = ({children, flex, bgColor}: props ) => {
    return (
        <Animated.View style = {[{ flex: flex, backgroundColor: '#559B45' }, bgColor]}>
            <View style = {styles.mainContainer}>
                {children}
            </View>
        </Animated.View>
    )
}

export default TopRightCurvedContainer

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        padding: 8,
    },
})