import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

interface props {
    children: JSX.Element
    flex?: number
}

const BotLeftCurvedContainer = ({children, flex}: props ) => {
    return (
        <View style = {[{flex: flex || 1}, styles.backContainer]}>
            <View style = {styles.mainContainer}>
                {children}
            </View>
        </View>
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
