import React, { CSSProperties, FC, ReactNode } from 'react'
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
} from 'react-native'
interface Props {
    children: ReactNode 
    style?: ViewStyle
    onPress: ()=> void
}

const OvalButton: FC<Props> = ({children, style, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style = {[styles.mainContainer, styles.shadow, style]}
        >
            <Text
                style = {styles.text}
            >
                {children}
            </Text>
        </TouchableOpacity>

    )
}

export default OvalButton

const styles = StyleSheet.create({
   mainContainer: {
        height: 40,
        width: 125,
        borderRadius: 24, 
        backgroundColor: '#559B45',
   },
   text: {
        flex:1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
   },
   shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
   }
})