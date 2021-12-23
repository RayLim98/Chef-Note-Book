import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native'

interface Props {
    navigation?: any
}

const DashBoard = (props: Props) => {
    return (
        <View style = {{flex: 1}}>
            <ScrollView style = {{flex: 1}}>
                <Text>
                    This is the dashboard
                </Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Login")}>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default DashBoard
