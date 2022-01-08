import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    View,
    Animated,
    ViewStyle,
    StyleProp,
} from 'react-native'

interface Props {
    bgColor?: any 
    children1?: React.ReactNode 
    children2?: React.ReactNode 
    disableChild1?: boolean 
    disableChild2?: boolean 
    scale?: Animated.Value
    style?: ViewStyle 
}
const MainContainer: React.FC<Props> = ({
    scale, 
    children1, 
    children2, 
    disableChild1, 
    disableChild2,
    style,
    bgColor,
}) => {
    return (
        <Animated.View style = {[ {flex: 1, backgroundColor: bgColor || '#559B45', }, style ]}>
            {
                disableChild1
                ? null 
                :
                <BotLeftCurvedContainer
                    bgColor={bgColor}
                    flex = {scale || 0.15}
                >
                    {children1}
                </BotLeftCurvedContainer>
            }
            {
                disableChild2
                ? null 
                :
                <TopRightCurvedContainer
                    bgColor={bgColor}
                    flex = {1}
                >
                    {children2}
                </TopRightCurvedContainer>
            }
        </Animated.View>
    )
}

export default MainContainer
