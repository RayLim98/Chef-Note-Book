import React, { useState } from 'react'
import {
    Text,
    View,
    Image,
} from 'react-native'
import logo from '../assets/chef.png';
import MainContainer from '../components/containers/MainContainer'
import GenericInputField from '../components/inputFields/genericInputField'
import OvalButton from '../components/buttons/roundedButton/OvalButton'
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';


interface props {

}

interface form  {
    userName: string,
    password: string,
}

const Login: React.FC<props> = ({}) => {
    const navigation = useNavigation()
    const {control, handleSubmit, formState: {errors}} = useForm<form>({
        defaultValues: {
            userName: '',
            password: '',
        }
    })

    const onSubmit = () => {
        navigation.navigate('Introduction')
    }

    return (
        <MainContainer
            children2 = {
                <>
                    <View style = {{alignSelf: 'center', flex: 3, justifyContent: 'center',}}>
                        {errors.userName && <Text style = {{color: 'red'}}>*UserName is empty</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <GenericInputField 
                                    name = {'User Name'}
                                    onBlur={onBlur}
                                    value= {value}
                                    onChangeText={onChange}
                                />
                            )}
                            name='userName'
                        />
                        {errors.password && <Text style = {{color: 'red'}}>*Password is empty</Text>}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <GenericInputField 
                                    name = {'Password'}
                                    onBlur={onBlur}
                                    value= {value}
                                    onChangeText={onChange}
                                    hidden
                                />
                            )}
                            name='password'
                        />
                        <OvalButton 
                            onPress={handleSubmit(onSubmit)}
                            style = {{alignSelf: 'flex-end'}}
                        >
                            Confirm
                        </OvalButton>
                    </View>
                    <SharedElement id = 'logo'>
                        <Image
                            style = {{height: 100, resizeMode: 'contain', alignSelf: 'center',}}
                            source={logo}
                        />
                    </SharedElement>
                </>
            }
        />
    )
}

export default Login
