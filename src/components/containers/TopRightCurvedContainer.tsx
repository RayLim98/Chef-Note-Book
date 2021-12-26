import React from 'react'
import {
    View,
    StyleSheet,
} from 'react-native'

interface props {
    children?: React.ReactNode 
    flex?: number
}
const TopRightCurvedContainer = ({children, flex}: props ) => {
    return (
        <View style = {{flex: flex, backgroundColor: '#559B45'}}>
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