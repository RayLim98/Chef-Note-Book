import React, { useRef, useState, useEffect} from 'react'
import {
    Animated,
    StyleSheet,
} from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import HeroSqButton from '../components/buttons/squareButton/heroSqButton'
import image from '../assets/biryani.png'
import { ScrollView } from 'react-native-gesture-handler'

const data = [
    {
        uri: null,
        name: 'Chicken Noodles'
    },
    {
        uri: null,
        name: 'Pad thai'
    },
    {
        uri: null,
        name: 'Butter Chicken'
    },
    {
        uri: null,
        name: 'Teriyaki Chicken'
    },
    {
        uri: null,
        name: 'Miso Steak'
    },
    {
        uri: null,
        name: 'Korean Chicken'
    },
]

interface Props {
    navigation?: any
}

const Home = (props: Props) => {
    const viewSizeAni = useRef( new Animated.Value(0.2)).current
    const viewOp = useRef( new Animated.Value(0)).current
    
    useEffect(() => {
        Animated.timing(viewSizeAni, {
                toValue: 30,
                duration: 1000,
                useNativeDriver: false,
            }
        ).start(()=> {
            console.log("Animation finished")
        })
        Animated.timing(viewOp, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false,
            }
        ).start()
    }, [])

    return (
        <MainContainer
            scale={viewSizeAni}
            children1={
                <ScrollView style = {{flex: 1}}>
                    <Animated.View style = {[ styles.listContainer, {opacity: viewOp} ]}>
                        {/* <HeroSqButton
                            label={'Name'}
                            uri={image}
                        /> */}
                        {
                            data.map((item)=> 
                                    <HeroSqButton
                                        onPress={()=> console.log(item.name,'has been pressed')}
                                        key={item.name}
                                        label={item.name}
                                        uri={image}
                                    />
                            )
                        } 
                    </Animated.View>
                </ScrollView>
            }
        />
    )

}

export default Home

const styles = StyleSheet.create({
    listContainer: {
        flex:1, 
        flexWrap: 'wrap', 
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
    },
}) 