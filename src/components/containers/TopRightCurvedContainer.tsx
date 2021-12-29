import React from 'react'
import {
    View,
    StyleSheet,
    ViewStyle,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    style?: ViewStyle
    flex?: number
}
const TopRightCurvedContainer = ({children, flex, style}: props ) => {
    return (
        <View style = {[{ flex: flex, backgroundColor: '#559B45' }, style]}>
            <View style = {styles.mainContainer}>
                {children}
            </View>
        </View>
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