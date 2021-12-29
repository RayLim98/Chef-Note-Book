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
    const bgColor = useRef( new Animated.Value(0))
    const viewOp = useRef( new Animated.Value(0))
    const isFocused = useIsFocused()
    useEffect(() => {
        if(isFocused) {
            Animated.timing(bgColor.current, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start()
            Animated.timing(viewOp.current, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: false,
                }
            ).start()
        } else {
            Animated.timing(bgColor.current, {
                    toValue: 0,
                    useNativeDriver: false,
                }
            ).start()
            Animated.timing(viewOp.current, {
                    toValue: 0,
                    useNativeDriver: false,
                }
            ).start()
        }
    }, [isFocused])

    const bgStyle = bgColor.current.interpolate({
        inputRange: [0,1],
        outputRange: ['rgb(85, 155, 69)','rgb(75, 134, 62)'],
    })

    return (
        <LowBarCont
            bgColor = {{backgroundColor: bgStyle}}
            children1 = {
                <Animated.View style = {{opacity: viewOp.current}}>
                    <Text>
                        nothing
                    </Text>
                </Animated.View>
            }
        />
    )
}

export default ShopList
