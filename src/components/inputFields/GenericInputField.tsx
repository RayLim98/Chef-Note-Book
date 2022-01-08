import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Dimensions,
} from 'react-native'

const w = Dimensions.get("window").width

interface Props {
    value: string
    name?: string
    hidden?: boolean
    onBlur?: ()=> void
    onChangeText: (text: string) => void
}

const GenericInputField: React.FC<Props> = ({value, name,hidden, onChangeText, onBlur}) => {
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
                onBlur={onBlur}
            />
        </View>
    )
}

export default GenericInputField

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 8,
        width: w * 0.7
    },
    textContainer: {

    },
    textInputContainer: {
        borderColor: '#3B5A39',
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
    }
})
