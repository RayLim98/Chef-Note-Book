import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { family, smlFont } from './textConfigs'

interface Props {
   children:  ReactNode 
   style?:  TextStyle
}

const Text2: FC<Props> = ({children, style}) => {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    )
}

export default Text2

const styles = StyleSheet.create({
    text: {
        fontSize: smlFont,
        fontFamily: family,
        color: 'white',
    }
})
