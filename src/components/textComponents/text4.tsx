import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { family, lrgFont } from './textConfigs'

interface Props {
   children:  ReactNode 
   style:  TextStyle 
}

const Text4: FC<Props> = ({children, style}) => {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    )
}

export default Text4

const styles = StyleSheet.create({
    text: {
        fontSize: lrgFont,
        fontFamily: family,
        color: 'white',
    }
})
