import React, { useRef } from 'react'
import { Dimensions } from 'react-native'
import { storiesOf } from "@storybook/react-native";
import { Animated } from 'react-native';
import { withKnobs, number, optionsKnob } from '@storybook/addon-knobs';
import CenterView from '../CenterView'
import DotCoursel from './dotCarousel'

const { width } = Dimensions.get('screen')
storiesOf("Carousels", module)
    .addDecorator((getstory)=> <CenterView>{getstory()}</CenterView>)
    .addDecorator(withKnobs)
    .add('Circle', () => ( 
        <DotCoursel
            count = {number('count', 4)}
            scrollX = {new Animated.Value(number('scroll x', 0, {step: width}))}
        />
     ))
