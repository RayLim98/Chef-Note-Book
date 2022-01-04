import React, { FC } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import LowBar from '../components/containers/LowBarCont'
import { useNavigation, useRoute } from '@react-navigation/native'
import PlainUpperTab from '../components/upperTab/plainUpTab'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
    
}

const CreateRecipe: FC<Props> = ({}) => {
    return (
        <LowBar>
            <View style = {{flex: 1}}>
                <PlainUpperTab onPressSettings={()=> {}}/>
                <ScrollView style = {{flex: 1, padding: 16}}>
                    <Text>
                        Name
                    </Text>
                    {/* <Image/> */}
                    <View>

                    </View>
                </ScrollView>
            </View>
        </LowBar>
    )
}

export default CreateRecipe

const styles = StyleSheet.create({})
