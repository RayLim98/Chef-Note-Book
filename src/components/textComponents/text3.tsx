import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { family, medFont } from './textConfigs'

interface Props {
   children:  ReactNode 
   style:  TextStyle 
}

const Text3: FC<Props> = ({children, style}) => {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    )
}

export default Text3

const styles = StyleSheet.create({
    text: {
        fontSize: medFont,
        fontFamily: family,
        color: 'white',
    }
})
