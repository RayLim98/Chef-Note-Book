import React, { useRef, useState, useEffect, FC} from 'react'
import {
    Image,
    View,
    Animated,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import HeroSqButton from '../components/buttons/squareButton/heroSqButton'
import image from '../assets/biryani.png'
import setting from '../assets/settings.png'
import { ScrollView } from 'react-native-gesture-handler'
import { useIsFocused } from '@react-navigation/native'

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

const Home: FC<Props> = ({navigation}) => {
    const bgColor = useRef( new Animated.Value(0))
    const viewSizeAni = useRef( new Animated.Value(0.2)).current
    const viewOp = useRef( new Animated.Value(0)).current
    const isFocused = useIsFocused();

    const bgStyle = bgColor.current.interpolate({
        inputRange: [0,1],
        outputRange: ['#d5f9cd','rgb(85, 155, 69)'],
    })
    
    useEffect(() => {
        if( isFocused ) {
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
            Animated.timing(bgColor.current, {
                    toValue: 1,
                    useNativeDriver: false,
                }
            ).start()
        } else {
            Animated.timing(bgColor.current, {
                    toValue: 0,
                    useNativeDriver: false,
                }
            ).start()
        }
    }, [ isFocused ])

    return (
        <MainContainer
            scale={viewSizeAni}
            bgColor={{backgroundColor: bgStyle}}
            children1={
                <View style = {{flex: 1}}>
                    <View style = { styles.headerContainer }>
                        <Image source = {setting} style = {styles.image}/>
                        <Image source = {setting} style = {styles.image}/>
                        <View style = {styles.childContainer}>

                        </View>
                        <Image source = {setting} style = {styles.image}/>
                    </View>

                    <ScrollView style = {{flex: 1}}>
                        <Animated.View style = {[ styles.listContainer, {opacity: viewOp} ]}>
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
                </View>
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
    headerContainer: {
        height: 60,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
    },
    childContainer: {
        flex: 3, 
        backgroundColor: 'red'
    },
    image: {
        flex: 1,
        padding:4,
        resizeMode: 'center',
        height: '100%',
        width: '100%',
    }
}) 