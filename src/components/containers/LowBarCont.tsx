import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    View,
} from 'react-native'

interface Props {
    children: React.ReactNode
    bgColor?: any 
    scale?: any
}
const LowBarHeaderContainer: React.FC<Props> = ({
        children,
        bgColor,
        scale,
    }) => {
    return (
        <View style = {[ {flex: 1} ]}>
            <BotLeftCurvedContainer
                flex = {scale || 30}
                bgColor={bgColor}
            >
                {children}
            </BotLeftCurvedContainer>
            {/* <TopRightCurvedContainer
                flex = {1}
                bgColor={bgColor}
            >
            </TopRightCurvedContainer> */}
        </View>
    )
}

export default LowBarHeaderContainer
