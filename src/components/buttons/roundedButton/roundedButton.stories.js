import React from 'react'
import { storiesOf } from "@storybook/react-native";
import CenterView from '../../CenterView'
import OvalButton from './OvalButton'


storiesOf("Rounded Button", module)
    .addDecorator((getstory)=> <CenterView>{getstory()}</CenterView>)
    .add('primary', ()=> ( 
        <OvalButton
            onPress={()=> console.log('Ping')}
        >
            Oval Button
        </OvalButton>
     ))
    
