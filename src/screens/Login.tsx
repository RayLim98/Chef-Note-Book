import React, {useState} from 'react'
import {
    View,
    Image,
} from 'react-native'
import logo from '../assets/chef.png';
import MainContainer from '../components/containers/MainContainer'
import GenericInputField from '../components/inputFields/genericInputField'
import OvalButton from '../components/buttons/roundedButton/OvalButton'
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';


interface props {
}

interface credentials {
    userName: string
    password: string
} 

const Login: React.FC<props> = ({}) => {
    const navigation = useNavigation()
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

    const handleSubmit = (item: object) => {
        navigation.navigate('DashBoard', item)
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
                            onPress={()=> handleSubmit({ id: 'logo' , imageUrl: logo})}
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
