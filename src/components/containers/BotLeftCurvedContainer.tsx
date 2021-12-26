import React from 'react'
import {
    View,
    Animated,
    StyleSheet,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    flex?: any
}

const BotLeftCurvedContainer = ({children, flex}: props ) => {
    return (
        <Animated.View style = {[{flex: flex || 1}, styles.backContainer]}>
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
        borderBottomLeftRadius: 35,
        padding: 8,
    },
    backContainer: {
        backgroundColor: 'white',
    },
})
