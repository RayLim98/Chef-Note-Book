import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import LowBar from '../components/containers/LowBarCont'
import { useNavigation, useRoute } from '@react-navigation/native'
import PlainUpperTab from '../components/upperTab/plainUpTab'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
    
}

const Recipe: FC<Props> = ({}) => {
    const navigation = useNavigation()
    const routes = useRoute()
    const recipe = useRoute().params
    console.log(routes)

    return (
        <LowBar>
            <View style = {{flex: 1}}>
                {/* <PlainUpperTab onPressSettings={()=> {}}/> */}
                <ScrollView style = {{flex: 1, padding: 16}}>
                    <Text>
                        Recipe Screen
                    </Text>
                    {/* <Image/> */}
                    <View>

                    </View>
                </ScrollView>
            </View>
        </LowBar>
    )
}

export default Recipe

const styles = StyleSheet.create({})
