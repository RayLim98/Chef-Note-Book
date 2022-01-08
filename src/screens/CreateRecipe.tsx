import React, { FC, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import MainContainer from '../components/containers/MainContainer'
import LowBar from '../components/containers/LowBarCont'
import { useNavigation, useRoute } from '@react-navigation/native'
import PlainUpperTab from '../components/upperTab/plainUpTab'
import { ScrollView, TextInput } from 'react-native-gesture-handler'


interface partition {
    name: string
    order: number
    amount?: number
    unit?: string
}

interface Props {
    
}

const CreateRecipe: FC<Props> = ({}) => {
    const [state, setState] = useState<partition[]>([
        {
            name: 'chicken',
            order: 1,
            amount: 5,
            unit: 'kg',
        },
        {
            name: 'paprika',
            order: 1,
            amount: 2,
            unit: 'tsp',
        }
    ])

    const onChangeName = (text: string, index: number)=> {
        let newState: partition[] = [...state]
        let newElement = newState[index]
        newElement.name = text 
        newState[index] = newElement
        setState(newState)
    }

    console.log(state)
    return (
        <LowBar>
            <View style = {{flex: 1}}>
                <PlainUpperTab onPressSettings={()=> {}}/>
                <ScrollView style = {{flex: 1, padding: 16}}>
                    <View style = {{
                        backgroundColor: 'white',
                        borderRadius: 25,
                    }}>
                        {
                            state?.map((item,i)=> (
                                <View
                                    style = {{paddingHorizontal: 16}}
                                >
                                    <TextInput 
                                        value={item.name}
                                        onChangeText={(text)=> onChangeName(text,i)}

                                    />
                                </View>
                            ))
                        }
                        
                    </View>
                </ScrollView>
            </View>
        </LowBar>
    )
}

export default CreateRecipe

const styles = StyleSheet.create({})
