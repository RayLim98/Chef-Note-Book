import { useIsFocused } from '@react-navigation/native'
import React , { FC, useEffect, useRef, useState }from 'react'
import { 
    Text,
    Animated,
} from 'react-native'
import LowBarCont from '../components/containers/LowBarCont'

interface Props {
   prevColor: string 
   navigation: any 
}

const ShopList: FC<Props> = ({ navigation }) => {
    const bgColor = useRef( new Animated.Value(0)).current
    const viewOp = useRef( new Animated.Value(0)).current
    const isFocused = useIsFocused()
    useEffect(() => {
        if(isFocused) {
            Animated.timing(bgColor, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start()
            Animated.timing(viewOp, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start()
        } else {
            Animated.timing(bgColor, {
                    toValue: 0,
                    useNativeDriver: false,
                }
            ).start()
            Animated.timing(viewOp, {
                    toValue: 0,
                    useNativeDriver: false,
                }
            ).start()
        }
    }, [isFocused])

    const bgStyle = bgColor.interpolate({
        inputRange: [0,1],
        outputRange: ['rgb(85, 155, 69)','#d5f9cd'],
    })

    return (
        <LowBarCont
            bgColor = {{backgroundColor: bgStyle}}
            children1 = {
                <Animated.View style = {{opacity: viewOp}}>
                    <Text>
                        nothing
                    </Text>
                </Animated.View>
            }
        />
    )
}

export default ShopList
