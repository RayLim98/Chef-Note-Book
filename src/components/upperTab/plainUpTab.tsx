import React, { FC, useRef, useState } from 'react'
import { TextInput, StyleSheet, Image, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import setting from '../../assets/settings.png'
import search from '../../assets/search.png'
import logo from '../../assets/chef.png'

interface Props {
    onPressSettings: ()=> void
}

const PlainUpperTab:FC<Props> = ({ onPressSettings }) => {
    return (
        <View style = { styles.headerContainer }>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source = {logo}/>
            </View>
            <View style = {styles.imageContainer}>
            </View>
            <View style = {styles.childContainer} >
            </View>
            <TouchableOpacity 
                style = {styles.imageContainer}
                onPress={onPressSettings}
            >
                <Image source = {setting} style = {styles.smlImage}/>
            </TouchableOpacity>
        </View>
    )
}

export default PlainUpperTab

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
    },
    childContainer: {
        flex: 4, 
    },
    imageContainer: {
        flex: 1,
        padding:4,
        resizeMode: 'center',
    },
    image: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },
    smlImage: {
        height: 30,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
}) 
