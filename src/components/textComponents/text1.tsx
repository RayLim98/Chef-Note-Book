import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { family, extraSmlFont } from './textConfigs'

interface Props {
   children:  ReactNode 
   style:  TextStyle 
   color?: string
}

const Text1: FC<Props> = ({children, style, color}) => {
    return (
        <Text style = {[
            styles.text, 
            color? {color: color}: null, 
            style
        ]}>
            {children}
        </Text>
    )
}

export default Text1

const styles = StyleSheet.create({
    text: {
        fontSize: extraSmlFont,
        fontFamily: family,
        color: 'white',
    }
})
