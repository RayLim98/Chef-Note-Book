import React, { FC, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import LowBar from '../components/containers/LowBarCont'
import PlainUpperTab from '../components/upperTab/plainUpTab'
import ImageButton from '../components/buttons/borderlessButton/imageButton'

import plus_icon from '../assets/plus.png'


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
            order: 2,
            amount: 2,
            unit: 'tsp',
        },
    ])

    useEffect(() => {
    }, [state])

    const createPartition = () => {
        const newPartition: partition = {
            name: '',
            order: state.length + 1,
            amount: 0,
            unit: '',
        }   
        setState([...state, newPartition])
    }

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
                                    key={i}
                                    style = {{paddingHorizontal: 16, borderBottomWidth: 1}}
                                >
                                    <TextInput 
                                        placeholder='name'
                                        value={item.name}
                                        onChangeText={(text)=> onChangeName(text,i)}

                                    />
                                </View>
                            ))
                        }
                        <View
                            style = {{
                                paddingHorizontal: 16,
                                marginTop: 4,
                                marginBottom: 16,
                                alignItems: 'flex-end',
                            }}
                        >
                            <ImageButton
                                source={plus_icon}
                                onPress={createPartition}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LowBar>
    )
}

export default CreateRecipe

const styles = StyleSheet.create({})
