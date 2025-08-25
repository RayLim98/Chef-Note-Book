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
    onPress: ()=> void
    height?: number
    style?: ViewStyle
}

const ImageButton: FC<Props> = ({source, onPress, style, height}) => {
    return (
        <TouchableOpacity style = {[styles.container, style, height?{height: height}:{height: 40} ]}
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
        aspectRatio: 1,
        padding: 8,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 4,
        // },
        // shadowOpacity: 0.32,
        // shadowRadius: 5.46,

        // elevation: 9,
    },
    image: {
        flex:1,
        width: '100%',
        resizeMode:'contain'
    }
})

// Update
