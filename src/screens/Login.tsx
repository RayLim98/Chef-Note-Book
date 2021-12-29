import React, {useState} from 'react'
import {
    View,
    Image,
} from 'react-native'
import chef_icon from '../assets/chef.png';
import MainContainer from '../components/containers/MainContainer'
import GenericInputField from '../components/inputFields/GenericInputField'
import OvalButton from '../components/buttons/roundedButton/OvalButton'
import { SharedElement } from 'react-navigation-shared-element';

interface props {
    navigation: any
}

interface credentials {
    userName: string
    password: string
} 

const Login: React.FC<props> = ({navigation}) => {
    const [credentials, setCredientials] = useState<credentials>({
        userName: '',
        password: '',
    })

    const handleUserName = (text: string) => {
       setCredientials({...credentials, userName: text}) 
    }

    const handlePassword = (text: string) => {
       setCredientials({...credentials, password: text}) 
    }
    const handleSubmit = () => {
        navigation.navigate('DashBoard')
        console.log("Pressed!")
    }

    console.log('>>>', credentials)
    return (
        <MainContainer
            children2 = {
                <>
                    <View style = {{alignSelf: 'center', flex: 3, justifyContent: 'center',}}>
                        <GenericInputField 
                            name = {'User Name'}
                            value= {credentials.userName}
                            onChangeText={handleUserName}
                        />
                        <GenericInputField 
                            name = {'Password'}
                            value= {credentials.password}
                            onChangeText={handlePassword}
                            hidden
                        />
                        <OvalButton 
                            onPress={handleSubmit}
                            style = {{alignSelf: 'flex-end'}}
                        >
                            Confirm
                        </OvalButton>
                    </View>
                    <Image
                        style = {{height: 100, resizeMode: 'contain', alignSelf: 'center',}}
                        source={chef_icon}
                    />
                </>
            }
        />
    )
}

// Login.sharedElements={(route, otherRoute, showing) => {
//             const { item } = route.params;
//             return [`item.${item.id}.photo`];
//           }}

export default Login
