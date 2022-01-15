import React, { FC } from 'react'
import { StyleSheet, Dimensions, View, Animated } from 'react-native'

const {width} = Dimensions.get('screen')

interface Props {
   scrollX: any 
   count?: number
}

// const DotCarousel: FC<Props> = ({data, scrollX}) => {
const DotCarousel: FC<Props> = ({count, scrollX}) => {
    const arrayCounter = Array.from(Array(count||4).keys()) 
    return (
        <View style = {{
                alignSelf: 'stretch',
                justifyContent: 'center',
                flexDirection: 'row', 
            }}
        >
            {
                arrayCounter.map((_, index)=> { 
                    const inputRange =[(index-1)*width, (index)*width, (index+1)*width]
                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange:[0.7, 1.2, 0.7],
                        extrapolate: 'clamp'
                    })
                    const backgroundColor = scrollX.interpolate({
                        inputRange,
                        outputRange:['white', '#559b45', '#559b45'],
                        extrapolate: 'clamp'
                    })
                    const elevation = scrollX.interpolate({
                        inputRange,
                        outputRange: [0, 5, 0],
                        extrapolate: 'clamp'
                    })
                    return (
                        <Animated.View
                            key={index}
                            style = {[
                                styles.indicator,
                                {
                                    elevation,
                                    backgroundColor,
                                    transform: [
                                        {
                                            scale,
                                        }
                                    ],
                                }
                            ]}
                        />
                    )
                 })
            }
        </View>
    )
}

export default DotCarousel

const styles = StyleSheet.create({
    indicator: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#559b45',
        height: 10,
        width: 10, 
        margin: 10,
        marginVertical: 20,
        shadowColor: '#559b45',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    }

})