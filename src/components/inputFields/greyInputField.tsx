import React, { FC } from 'react'
import { StyleSheet, TextInput, TextStyle, } from 'react-native'

interface Props {
    style?: TextStyle 
    setRef?: any
    placeholder: string 
    onChangeText: (text: string)=> void
}

const GreyInputField: FC<Props> = ({setRef,placeholder, style, onChangeText}) => {
    return (
        <TextInput 
            ref={setRef}
            style = {[styles.searchBar, style]}
            placeholder={placeholder} 
            onChangeText={onChangeText}
        />
    )
}

export default GreyInputField

const styles = StyleSheet.create({
    searchBar: {
       borderRadius: 25,
       paddingHorizontal: '5%',
       backgroundColor: '#F9F9F9',
    },
})
