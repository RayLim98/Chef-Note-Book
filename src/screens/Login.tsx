import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    Image,
    Alert,
} from 'react-native'
import logo from '../assets/chef.png';
import MainContainer from '../components/containers/MainContainer'
import GenericInputField from '../components/inputFields/genericInputField'
import OvalButton from '../components/buttons/roundedButton/OvalButton'
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import Auth0 from 'react-native-auth0';

const cred = {
    domain: 'dev-4ir78alb.us.auth0.com', 
    clientId: 'Sm7E1Z1HHrYedK1IZN98g6GZeFchYFK4' 
}
const auth0 = new Auth0(cred);


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
    let [accessToken, setAccessToken] = useState<string | null>(null);

    const onLogin = () => {
        auth0.webAuth
            .authorize({
                scope: 'openid profile email'
            })
            .then(credentials => {
                // Alert.alert('AccessToken: ' + credentials.accessToken);
                setAccessToken(credentials.accessToken);
            })
            .catch(error => console.log(error));
    };

    const onLogout = () => {
        auth0.webAuth
            .clearSession({
                federated: false,
                customScheme: undefined
            })
            .then(success => {
                Alert.alert('Logged out!');
                setAccessToken(null);
            })
            .catch(error => {
                console.log('Log out cancelled');
            });
    };

    const onSubmit = () => {
        navigation.navigate('Introduction')
    }

    useEffect(() => {
        if(accessToken !== null) return navigation.navigate('DashBoard')
    }, [accessToken])
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
                            onPress={handleSubmit(onLogin)}
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
