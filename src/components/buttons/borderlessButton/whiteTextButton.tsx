import React, { FC, ReactNode } from 'react'
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
} from 'react-native'
import Text3 from '../../textComponents/text3'

interface Props {
    children: ReactNode    
}

const WhiteTextButton: FC<Props> = ({children}) => {
    return (
        <TouchableOpacity style = {styles.container}>
            <Text3 style = {styles.text}>
                {children}
            </Text3>
        </TouchableOpacity>
    )
}

export default WhiteTextButton

const styles = StyleSheet.create({
    container: {
        height: 30,
        aspectRatio: 2,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: 'red',
        alignSelf: 'center',
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})
