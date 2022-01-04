import React, { FC, ReactNode } from 'react'
import { 
    ImageSourcePropType,
    Image,
    StyleSheet, 
    TouchableOpacity,
    ViewStyle, 
} from 'react-native'
import Text3 from '../../textComponents/text3'

interface Props {
    source: ImageSourcePropType
    style?: ViewStyle
    onPress: ()=> void
}

const ImageButton: FC<Props> = ({source, onPress, style}) => {
    return (
        <TouchableOpacity style = {[styles.container, style]}
            onPress={onPress}
        >
            <Image
                style = {styles.image}
                source = {source}
            />
        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({
    container: {
        height: 50,
        aspectRatio: 1,
        padding: 12,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    image: {
        flex:1,
        width: '100%',
        resizeMode:'contain'
    }
})
