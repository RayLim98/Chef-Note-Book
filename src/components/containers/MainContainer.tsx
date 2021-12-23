import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    View,
    Text,
} from 'react-native'

interface Props {
    children: React.ReactNode 
    scale?: number
}
const MainContainer: React.FC<Props> = ({scale, children}) => {
    return (
        <View style = {{flex: 1, backgroundColor: '#559B45'}}>
            <BotLeftCurvedContainer
                flex = {scale || 1}
            >
                <Text>
                    Login Screen
                </Text>
            </BotLeftCurvedContainer>
            <TopRightCurvedContainer
                flex = {8}
            >
                {children}
            </TopRightCurvedContainer>
        </View>
    )
}

export default MainContainer
