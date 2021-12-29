import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    View,
} from 'react-native'

interface Props {
    children1: React.ReactNode
    children2?: React.ReactNode
    bgColor?: any 
    scale?: any
}
const LowBarHeaderContainer: React.FC<Props> = ({
        children1,
        children2,
        bgColor,
        scale,
    }) => {
    return (
        <View style = {[ {flex: 1} ]}>
            <BotLeftCurvedContainer
                flex = {scale || 30}
                bgColor={bgColor}
            >
                {children1}
            </BotLeftCurvedContainer>
            <TopRightCurvedContainer
                flex = {1}
                bgColor={bgColor}
            >
                {children2}
            </TopRightCurvedContainer>
        </View>
    )
}

export default LowBarHeaderContainer
