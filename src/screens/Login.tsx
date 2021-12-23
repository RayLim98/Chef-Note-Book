import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import BotLeftCurvedContainer from '../components/containers/BotLeftCurvedContainer'
import TopRightCurvedContainer from '../components/containers/TopRightCurvedContainer'
import MainContainer from '../components/containers/MainContainer'
import GenericInputField from '../components/inputFields/GenericInputField'

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

    console.log('>>>', credentials)
    return (
        <MainContainer>
            <View style = {{flex: 1, alignItems: 'center',justifyContent: 'center',}}>
                <GenericInputField 
                    name = {'User Name'}
                    value= {credentials.userName}
                    onChangeText={handleUserName}
                />
                <GenericInputField 
                    name = {'Password'}
                    value= {credentials.userName}
                    onChangeText={handlePassword}
                />
            </View>
            <View style = {{flex: 1, alignItems: 'center'}}>
            </View>
        </MainContainer>
    )
}

export default Login
