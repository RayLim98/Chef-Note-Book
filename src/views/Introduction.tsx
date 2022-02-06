import { useNavigation } from '@react-navigation/native'
import React, {useRef, useEffect} from 'react'
import { Image, StyleSheet, Text, View, FlatList, Animated, TouchableOpacity, ImageSourcePropType, Dimensions, ViewToken } from 'react-native'
import icon1 from '../assets/chef.png'
import icon2 from '../assets/settings.png'
import TextButton from '../components/buttons/borderlessButton/textButton'
import DotCarousel from '../components/carousel/dotCarousel'

const { width, height } = Dimensions.get('screen')

const data: Slide[]  = [
    {
        key: '1',
        title: '',
        description: 'Welcome and thank you for downloading this app!',
        image: icon1,
    },
    {
        key: '2',
        title: '',
        description: 'For every avid chef or baker! Create your app on the go!',
        image: icon2,
    },
    {
        key: '3',
        title: '',
        description: 'Recipes saved locally on your device and saved in the cloud',
        image: icon2,
    },
    {
        key: '4',
        title: '',
        description: '4nd',
        image: icon2,
    },
]

interface Slide {
    key: string,
    title: string,
    description: string,
    image: ImageSourcePropType,
}

interface Props {
    
}


const Introduction = (props: Props) => {
    const navigation = useNavigation()

    // FlatListRef
    const flatListRef = useRef<FlatList>(null)  

    // Calls and sets to update the current index the user is on
    const onViewItem = useRef((item: {viewableItems: ViewToken[]})=> {
        indexValue.current = item.viewableItems[0].index
    })
    const indexValue = useRef<null | number>(null)

    // Current value of the horizontal scroll
    const scrollX = useRef(new Animated.Value(0)).current

    // Handles the "Next" button: weather to go to next slide or proceeds to the next screen 
    const onNextPress = () => {
        // if not null and if lower than the slide count
        if(indexValue.current != null && (indexValue.current + 1 < data.length))
            flatListRef.current?.scrollToIndex({index: indexValue.current + 1}) 
        // nav to next screen 
        else navigation.navigate('DashBoard')
    }

    const onBackPress = () => {
        // if not null and if lower than the slide count
        if(indexValue.current && indexValue.current != 0) 
            flatListRef.current?.scrollToIndex({index: indexValue.current - 1}) 
        
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault()
            onBackPress()
        })
    }, [navigation])

    return (
        <View style = {styles.container}>
            <Animated.FlatList
                pagingEnabled
                horizontal
                scrollEventThrottle={32}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}
                onViewableItemsChanged={onViewItem.current}
                data = {data}
                keyExtractor={(item) => item.key}
                renderItem={({item}: {item: Slide}) => {
                    return (
                        <View style ={{width, justifyContent: 'center', alignItems: 'center'}}>
                            <View style = {{
                                    flex: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Image 
                                    source = {item.image}
                                    style = {{
                                        width: width/2,
                                        height: height/2,
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                            <Text
                            style = {{ flex: 0.1 }}
                            >
                                {item.description}
                            </Text>
                        </View>
                    )}}
            />
            {/* Carousel Indicator */}
            <DotCarousel
                scrollX={scrollX}
                count={data.length}
            />
            {/* nav Button */}
            <View style = {styles.lowerTab}>
                <TextButton
                    style={{height: 30, margin: 20,}}
                    textStyle={{color: '#559b45', fontWeight: 'bold'}} 
                    onPress={()=> navigation.navigate('DashBoard')}
                >
                    Skip
                </TextButton>
                <TextButton
                    style={{height: 30, margin: 20,}}
                    textStyle={{color: '#559b45', fontWeight: 'bold'}} 
                    onPress={onNextPress}
                >
                    Next
                </TextButton>
            </View>
        </View>
    )
}

export default Introduction

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lowerTab: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        padding: 25,
        height: '100%',
        backgroundColor: 'green',
    },
})
