import React, { FC } from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text,  TouchableOpacity, Button} from 'react-native'

interface Props {
   uri: any 
   label: string
   onPress: ()=> void
}

const HeroSqButton: FC<Props> = ({uri, label, onPress}) => {
    return (
        <TouchableOpacity 
            style = {styles.mainContiner}
            onPress={onPress}
        >
            <Image style = {styles.image} source = {uri}/>
            <Text style = {styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

export default HeroSqButton

const styles = StyleSheet.create({
    mainContiner: {
        margin: 5,
        aspectRatio: 1,
        width:100,
        borderRadius:14,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        flex: 2,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    text: {
        flex: 1,
    }
})
