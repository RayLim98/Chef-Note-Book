import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    Animated,
    ViewStyle,
} from 'react-native'

interface Props {
    children1: React.ReactNode
    children2: React.ReactNode
    bgColor?: Animated.Value | string
    scale: any
}

// hello world
const LowBarHeaderContainer: React.FC<Props> = ({
        children1,
        children2,
        bgColor,
        scale,
    }) => {
    return (
        <Animated.View style = {[ {flex: 1, backgroundColor: bgColor || '#559B45', }]}>
            <BotLeftCurvedContainer
                flex = {scale || 0.2}
            >
                {children1}
            </BotLeftCurvedContainer>
            <TopRightCurvedContainer
                flex = {1}
            >
                {children2}
            </TopRightCurvedContainer>
        </Animated.View>
    )
}

export default LowBarHeaderContainer
