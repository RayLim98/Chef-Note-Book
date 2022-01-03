import React, { FC } from 'react'
import { StyleSheet, TextInput, TextStyle, } from 'react-native'

interface Props {
    placeholder: string 
    style?: TextStyle 
}

const GreyInputField: FC<Props> = ({placeholder, style}) => {
    return (
        <TextInput 
            style = {[styles.searchBar, style]}
            placeholder={placeholder} 
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
