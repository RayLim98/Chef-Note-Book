import React from 'react'
import { storiesOf } from "@storybook/react-native";
import CenterView from '../../CenterView'
import HeroSqButton from './heroSqButton'


storiesOf("Square Button", module)
    .addDecorator((getstory)=> <CenterView>{getstory()}</CenterView>)
    .add('primary', ()=> ( 
        <HeroSqButton
            onPress={()=> console.log('Ping')}
        >
            Oval Button
        </HeroSqButton>

     ))
    
