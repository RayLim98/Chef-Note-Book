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
import OvalButton from '../components/buttons/roundedButton/OvalButton'

interface partition {
    igName: string
    amount?: number
    unit?: string
}

interface Props {
    
}

const CreateRecipe: FC<Props> = ({}) => {
    const [name, setName] = useState<string>('')
    const [state, setState] = useState<partition[]>([
        {
            igName: 'Chicken',
            amount: 5,
            unit: 'kg',
        },
        {
            igName: 'Paprika',
            amount: 2,
            unit: 'tsp',
        },
    ])

    const createPartition = () => {
        const newPartition: partition = {
            igName: '',
            amount: 0,
            unit: '',
        }   
        setState([...state, newPartition])
    }

    const onChangeNameAtIndex = (text: string, index: number)=> {
        let newState: partition[] = [...state]
        let newElement = newState[index]
        newElement.igName = capitalize(text) 
        newState[index] = newElement
        setState(newState)
    }

    const onChangeQtyAtIndex = (text: string, index: number)=> {
        let newState: partition[] = [...state]
        let newElement = newState[index]
        newElement.amount = parseInt(text) 
        newState[index] = newElement
        setState(newState)
    }

    const onChangeUnitAtIndex = (text: string, index: number)=> {
        let newState: partition[] = [...state]
        let newElement = newState[index]
        newElement.unit = text 
        newState[index] = newElement
        setState(newState)
    }

    const onDeleteAtIndex = (targetIndex: number) => {
        const filteredArray = state.filter((_, index) => index != targetIndex)
        setState([...filteredArray])
    }

    const onSubmit = () => {
        console.log('submitted')
    }

    console.log(state)
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
                    {
                        state?.map((item,i)=> (
                            <View
                                key={i}
                                style = {styles.partitionContainer}
                            >
                                <TextInput 
                                    style = {{flex:2}}
                                    placeholder='name'
                                    value={item.igName}
                                    onChangeText={(text)=> onChangeNameAtIndex(text,i)}

                                />
                                <TextInput 
                                    style = {{flex:1}}
                                    placeholder='Qty'
                                    value={item.amount? `${item.amount}`: undefined }
                                    onChangeText={(text)=> onChangeQtyAtIndex(text,i)}

                                />
                                <TextInput 
                                    style = {{flex:1}}
                                    placeholder='Unit'
                                    value={item.unit}
                                    onChangeText={(text)=> onChangeUnitAtIndex(text,i)}

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
                <OvalButton
                    onPress={onSubmit}
                    style={{backgroundColor: 'white', alignSelf: 'center', width: '50%', marginTop: 10,}}
                >
                    Confirm
                </OvalButton>
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
