import React from 'react'
import { Button, Label } from './sytles'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'

export default function PayButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
            colors={
                focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']
            }
            start={[1, 0.2]}
        >
            <MaterialIcons name="attach-money" size={30} color={focused ? '#000' : '#fff'}/>
            <Label>Pagar</Label>
        </Button>
        </TouchableWithoutFeedback>
    );    
}