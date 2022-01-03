import React, { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextStyle, } from 'react-native'
import { family, lrgFont, title } from './textConfigs'

interface Props {
   children:  ReactNode 
   style?: TextStyle 
}

const TextTitle: FC<Props> = ({children, style}) => {
    return (
        <Text style = {[styles.text, style]}>
            {children}
        </Text>
    )
}

export default TextTitle

const styles = StyleSheet.create({
    text: {
        fontSize: title,
        fontFamily: family,
        fontWeight: 'bold',
        color: 'white',
    }
})
