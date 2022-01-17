import React, { FC, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import LowBar from '../components/containers/LowBarCont'
import ImageButton from '../components/buttons/borderlessButton/imageButton'

import plus_icon from '../assets/plus.png'
import close_icon from '../assets/close.png'
import capitalize from './utils/capitalize'
import TextTitle from '../components/textComponents/textTitle'
import GreyInputField from '../components/inputFields/greyInputField'


interface partition {
    name: string
    amount?: number
    unit?: string
}

interface Props {
    
}

const CreateRecipe: FC<Props> = ({}) => {
    const [name, setName] = useState<string>('')
    const [state, setState] = useState<partition[]>([
        {
            name: 'Chicken',
            amount: 5,
            unit: 'kg',
        },
        {
            name: 'Paprika',
            amount: 2,
            unit: 'tsp',
        },
    ])

    const createPartition = () => {
        const newPartition: partition = {
            name: '',
            amount: 0,
            unit: '',
        }   
        setState([...state, newPartition])
    }

    const onChangeNameAtIndex = (text: string, index: number)=> {
        let newState: partition[] = [...state]
        let newElement = newState[index]
        newElement.name = capitalize(text) 
        newState[index] = newElement
        setState(newState)
    }

    const onDeleteAtIndex = (targetIndex: number) => {
        const filteredArray = state.filter((_, index) => index != targetIndex)
        setState([...filteredArray])
    }

    // console.log(state)
    return (
        <LowBar>
            <ScrollView style = {{flex: 1, padding: '5%'}}>
                <TextTitle>
                    Add Recipe
                </TextTitle>
                <GreyInputField
                    value = {name}
                    style = {{ marginVertical: 16,}}
                    placeholder = 'Recipe Name'
                    onChangeText={(text)=> setName(capitalize(text))}
                />
                <View style = {{
                    borderRadius: 25,
                    backgroundColor: 'white',
                    padding: '5%'
                }}>
                {/* <PlainUpperTab onPressSettings={()=> {}}/> */}
                    {
                        state?.map((item,i)=> (
                            <View
                                key={i}
                                style = {styles.partitionContainer}
                            >
                                <TextInput 
                                    placeholder='name'
                                    value={item.name}
                                    onChangeText={(text)=> onChangeNameAtIndex(text,i)}

                                />
                                <ImageButton
                                    source={close_icon}
                                    onPress={()=> onDeleteAtIndex(i)}
                                />
                            </View>
                        ))
                    }
                    <View
                        style = {[styles.partitionContainer, {borderBottomWidth: 0, marginVertical: 10}]}
                    >
                        <View style = {{ flex: 1 }}>

                        </View>
                        <ImageButton
                            source={plus_icon}
                            onPress={createPartition}
                        />
                    </View>
                </View>
            </ScrollView>
        </LowBar>
    )
}

export default CreateRecipe

const styles = StyleSheet.create({
    partitionContainer: {
        paddingHorizontal: 16, 
        borderBottomWidth: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
    }
})
