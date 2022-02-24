import React from 'react'
import { storiesOf } from "@storybook/react-native";
import CenterView from '../../CenterView'
import TextButton from './textButton'
import ImageButton from './imageButton'
import image from '../../../assets/biryani.png'


storiesOf("Borderless Button", module)
    .addDecorator((getstory)=> <CenterView>{getstory()}</CenterView>)
    .add('primary', ()=> ( 
        <TextButton
            onPress={()=> console.log('Ping')}
            source = {image}
        >
            Hello
        </TextButton>
     ))
    .add('image', ()=> ( 
        <ImageButton
            onPress={()=> console.log('Ping')}
            source = {image}
        >
            Hello
        </ImageButton>
     ))
    
