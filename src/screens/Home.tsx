import React, { useRef, useState, useEffect, FC} from 'react'
import { SharedElement } from 'react-navigation-shared-element'
import {
    View,
    Animated,
    StyleSheet,
    BackHandler,
} from 'react-native'
import { useAuth } from '../mongo/AuthProvider'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import recipeInterface from '../mongo/realmObjects/recipeInterface'

// Images
import image from '../assets/biryani.png'
import add from '../assets/add.png'
import LowBarHeaderContainer from '../components/containers/LowBarCont'

// Components
import TextTitle from '../components/textComponents/textTitle'
import ImageButton from '../components/buttons/borderlessButton/imageButton'
import HeroSqButton from '../components/buttons/squareButton/heroSqButton'

import { uniqueId } from 'lodash'


interface Props {
}

const Home: FC<Props> = () => {
    const navigation = useNavigation()
    const {signOut, user, recipes} = useAuth()
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

    const logOut = () => signOut(()=> navigation.navigate("DashBoard"))

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault()
            if(isFocused) {
                BackHandler.exitApp()
            } 
        })
        return(()=> {
            navigation.removeListener('beforeRemove', (e)=> {
                e.preventDefault()
                if(isFocused) {
                    BackHandler.exitApp()
                } 
            })
        })
    }, [navigation])

    // console.log('Logged in with user ID: ', user.id ? user.id: 'empty')
    console.log('User Recipes: ', recipes)
    return (
        <LowBarHeaderContainer bgColor={{backgroundColor: bgStyle}}>
            <View style = {{flex: 1}}>
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
                        <View style = { styles.listContainer }>
                            {    
                                recipes.map((recipe: recipeInterface)=> 
                                    recipe
                                    ?  <HeroSqButton
                                            onPress={()=> {
                                                navigation.navigate('Recipe', recipe)
                                            }}
                                            key={uniqueId()}
                                            label={recipe.name}
                                            uri={image}
                                        />
                                    : null
                                )
                            } 
                        </View>
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
        marginVertical: 20,
        marginHorizontal: 20,
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