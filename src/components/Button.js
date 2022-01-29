import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Color } from '../utils/color';
import ThemeUtils from '../utils/ThemeUtils';
import useOrientation from './useOrientation';


function Button(props) {
    const orientation = useOrientation();
    const isPortrait = orientation.isPortrait
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={[Style.btn,{width: isPortrait ? ThemeUtils.relativeWidth(80) : ThemeUtils.relativeWidth(105),}]}>
            <Text style={Style.text}>{props.label}</Text>
        </TouchableOpacity>
    )
}



export default Button;
const Style=StyleSheet.create({
    btn:{  backgroundColor: Color.APPCOLOR, padding: 15, borderRadius: 10 },
    text:{ textAlign: 'center', color: Color.WHITE, fontWeight: 'bold', fontSize: 16 }
})
