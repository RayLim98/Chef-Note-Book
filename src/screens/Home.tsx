import React, { useRef, useState, useEffect, FC} from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import {
    Image,
    View,
    Animated,
    StyleSheet,
    BackHandler,
    Alert,
} from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import HeroSqButton from '../components/buttons/squareButton/heroSqButton'
import { ScrollView } from 'react-native-gesture-handler'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import MainUpperTab from '../components/upperTab/mainUpTab'
import TextTitle from '../components/textComponents/textTitle'
import data from '../dummyData/recipes'
import ImageButton from '../components/buttons/borderlessButton/imageButton'

import logo from '../assets/chef.png'
import image from '../assets/biryani.png'
import add from '../assets/add.png'
import LowBarHeaderContainer from '../components/containers/LowBarCont'
interface Props {
}

const Home: FC<Props> = () => {
    const navigation = useNavigation()
    const [textValue, settextValue] = useState('')
    const isFocused = useIsFocused();

    const bgColor = useRef( new Animated.Value(0))
    const viewSizeAni = useRef( new Animated.Value(0.2)).current
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

    const settings = () => {
        console.log('settings had been pressed')
    }

    const onChangeText = (text: string) => {
        settextValue(text)
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault()
            if(isFocused) {
                Alert.alert(
                    'Exit App',
                    'Do you want to exit?',
                    [
                    {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'Yes', onPress: () => BackHandler.exitApp()},
                    ],
                    { cancelable: false });
                    return true;
            } 
        })
    }, [navigation])

    console.log('Search bar value:', textValue)
    return (
        <LowBarHeaderContainer bgColor={{backgroundColor: bgStyle}}>
            <View style = {{flex: 1}}>
                {/* <MainUpperTab logo={ 
                    <SharedElement id = 'logo' style = {{flex: 1}}>
                        <Image
                            style = {styles.image}
                            source={logo}
                        />
                    </SharedElement>}
                    onChangeText={onChangeText}
                    onPressSettings={settings}
                /> */}
                <View style = {{flexDirection: 'row',}}>
                    <TextTitle style = {{marginVertical: 20, marginHorizontal: 16, }}> 
                        Recipes 
                    </TextTitle>
                    <View style = {{justifyContent: 'center'}}>
                        <ImageButton
                            source = {add}
                            onPress={()=> navigation.navigate('CreateRecipe')}
                        />
                    </View>
                </View>
                <ScrollView style = {{flex: 1}}>
                    <Animated.View style = {[ styles.listContainer]}>
                        {   
                            data.map((item)=> 
                                    <HeroSqButton
                                        onPress={()=> navigation.navigate('Recipe', item)}
                                        key={item.name}
                                        label={item.name}
                                        uri={image}
                                    />
                            )
                        } 
                    </Animated.View>
                </ScrollView>
            </View>
        </LowBarHeaderContainer>
    )

}

export default Home

const styles = StyleSheet.create({
    listContainer: {
        flex:1, 
        flexWrap: 'wrap', 
        flexDirection: 'row',
        justifyContent: 'space-evenly', 
        marginVertical: 20,
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