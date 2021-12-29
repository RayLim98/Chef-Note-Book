import React from 'react'
import BotLeftCurvedContainer from './BotLeftCurvedContainer'
import TopRightCurvedContainer from './TopRightCurvedContainer'
import {
    View,
    ViewStyle,
} from 'react-native'

interface Props {
    children1?: React.ReactNode 
    children2?: React.ReactNode 
    disableChild1?: boolean 
    disableChild2?: boolean 
    scale?: any
    style?: ViewStyle 
}
const MainContainer: React.FC<Props> = ({
    scale, 
    children1, 
    children2, 
    disableChild1, 
    disableChild2,
    style,
}) => {
    return (
        <View style = {[ {flex: 1, backgroundColor: '#559B45', }, style ]}>
            {
                disableChild1
                ? null 
                :
                <BotLeftCurvedContainer
                    flex = {scale || 0.2}
                >
                    {children1}
                </BotLeftCurvedContainer>
            }
            {
                disableChild2
                ? null 
                :
                <TopRightCurvedContainer
                    flex = {1}
                >
                    {children2}
                </TopRightCurvedContainer>
            }
        </View>
    )
}

export default MainContainer
