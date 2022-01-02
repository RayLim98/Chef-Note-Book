import React, { FC, ReactNode } from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'
import setting from '../../assets/setting.png'
import search from '../../assets/search.png'
import chef from '../../assets/search.png'

interface Props {
    children: ReactNode
}

const MainTab:FC<Props> = ({ children }) => {
    return (
        <View style = { styles.headerContainer }>
            <Image source = {chef} style = {styles.image}/>
            <Image source = {search} style = {styles.image}/>
            <View style = {styles.childContainer}>
                {children}
            </View>
            <Image source = {setting} style = {styles.image}/>
        </View>
    )
}

export default MainTab

const styles = StyleSheet.create({
    headerContainer: {
        height: 60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
    },
    childContainer: {
        flex: 3, 
        backgroundColor: 'red'
    },
    imageContainer: {
        flex: 1,
        resizeMode: 'center',
        height: '100%',
        width: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'center',
        height: '100%',
        width: '100%',
    },
}) 
