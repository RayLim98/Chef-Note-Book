import React, { FC, useRef, useState } from 'react'
import { TextInput, StyleSheet, Image, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import setting from '../../assets/settings.png'
import search from '../../assets/search.png'
import GreyInputField from '../inputFields/greyInputField'

interface Props {
    logo?: any
    onChangeText: (text: string)=> void
    onPressSettings: ()=> void
}

const MainUpperTab:FC<Props> = ({ logo, onPressSettings, onChangeText }) => {
    const searchBarRef = useRef<TextInput>(null)

    return (
        <View style = { styles.headerContainer }>
            <View style = {styles.imageContainer}>
                {logo}
            </View>
            <TouchableOpacity 
                style = {styles.imageContainer}
                onPress={()=> searchBarRef.current?.focus()}
            >
                <Image source = {search} style = {styles.smlImage}/>
            </TouchableOpacity>
            <View style = {styles.childContainer} >
                <GreyInputField
                    setRef={searchBarRef}
                    onChangeText={onChangeText}
                    placeholder='filter recipe'
                />
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

export default MainUpperTab

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
