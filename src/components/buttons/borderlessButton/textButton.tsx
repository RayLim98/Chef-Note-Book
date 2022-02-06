import React, { CSSProperties, FC, ReactNode } from 'react'
import { 
    StyleSheet, 
    TextStyle, 
    TouchableOpacity,
    Text,
} from 'react-native'

interface Props {
    children: ReactNode    
    style?: TextStyle
    textStyle?: TextStyle
    onPress: ()=> void
}

const TextButton: FC<Props> = ({children, style, textStyle, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style = {[styles.container, style]}
        >
            <Text style = {[styles.text, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton

const styles = StyleSheet.create({
    container: {
        height: 30,
        aspectRatio: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})
