import React, {useState} from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text,
} from 'react-native'


interface Props {
    value: string
    name?: string
    hidden?: boolean
    onChangeText: (text: string) => void
}
const GenericInputField: React.FC<Props> = ({value, name,hidden, onChangeText}) => {
    const isPassword = hidden || false

    return (
        <View style = {styles.mainContainer}>
            {
                name
                ? <Text style = {styles.textContainer}> {name} </Text>
                :null
            }
            <TextInput
                style = {styles.textInputContainer}
                secureTextEntry = {isPassword}
                value = {value}
                visible-password = {true}
                onChangeText={(text)=>onChangeText(text)}
            />
        </View>
    )
}

export default GenericInputField

const styles = StyleSheet.create({
    mainContainer: {
        width: '70%', 
        marginVertical: 8,
    },
    textContainer: {

    },
    textInputContainer: {
        borderColor: '#3B5A39',
        height: 60,
        borderRadius: 5,
        borderWidth: 1,
    }
})
