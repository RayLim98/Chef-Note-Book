import { useNavigation } from '@react-navigation/native'
import React, {useRef, useEffect} from 'react'
import { Image, StyleSheet, Text, View, FlatList, Animated, TouchableOpacity, ImageSourcePropType, Dimensions, ViewToken } from 'react-native'
import icon1 from '../assets/chef.png'
import icon2 from '../assets/settings.png'
import DotCarousel from '../components/carousel/dotCarousel'

const { width, height} = Dimensions.get('screen')

const data: Slide[]  = [
    {
        key: '1',
        title: '',
        description: '1st',
        image: icon1,
    },
    {
        key: '2',
        title: '',
        description: '2nd',
        image: icon2,
    },
    {
        key: '3',
        title: '',
        description: '3nd',
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
        else {
            navigation.navigate('DashBoard')
        }
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', (e)=> {
            e.preventDefault()
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
                renderItem={({item, index}) => {
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
                            {index}
                        </Text>
                    </View>
                )}}
            />
            {/* Carousel Indicator */}
            <DotCarousel
                scrollX={scrollX}
                data = {data}
            />
            {/* nav Button */}
            <View style = {styles.lowerTab}>
                <TouchableOpacity style = {styles.buttonContainer}>
                    <Text>
                        Skip
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={onNextPress}
                    style = {styles.buttonContainer}
                >
                    <Text>
                        Next
                    </Text>
                </TouchableOpacity>
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
        backgroundColor: 'blue'
    },
    buttonContainer: {
        padding: 25,
        height: '100%',
        backgroundColor: 'green',
    },
})
