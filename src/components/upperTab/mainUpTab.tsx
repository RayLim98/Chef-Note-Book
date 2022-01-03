import React, { FC, ReactNode } from 'react'
import { TextInput, StyleSheet, Image, TouchableOpacity, View, ImageSourcePropType } from 'react-native'
import setting from '../../assets/settings.png'
import search from '../../assets/search.png'
import chef from '../../assets/chef.png'
import GreyInputField from '../inputFields/greyInputField'
import { SharedElement } from 'react-navigation-shared-element'

interface Props {
    logo?: any
}

const MainUpperTab:FC<Props> = ({ 
    logo 
}) => {
    return (
        <View style = { styles.headerContainer }>
            <View style = {styles.imageContainer}>
                {logo}
            </View>
            <TouchableOpacity style = {styles.imageContainer}>
                <Image source = {search} style = {styles.smlImage}/>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.childContainer}>
                <GreyInputField
                    placeholder='filter recipe'
                />
            </TouchableOpacity>
            <TouchableOpacity style = {styles.imageContainer}>
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
