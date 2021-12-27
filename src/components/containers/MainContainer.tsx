import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    Animated,
    View,
    Text,
} from 'react-native'

interface Props {
    children1?: React.ReactNode 
    children2?: React.ReactNode 
    scale?: any
}
const MainContainer: React.FC<Props> = ({scale, children1, children2}) => {
    return (
        <View style = {{flex: 1, backgroundColor: '#559B45', zIndex: 1,elevation: 1}}>
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
        </View>
    )
}

export default MainContainer
