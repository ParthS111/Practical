import React, { Component } from 'react';
import { Color } from "../utils/color";
import { View, TextInput, Text, StyleSheet } from 'react-native';


export default function FloatingInputText(props) {


    return (
        <View style={Styles.container} >
            <View style={Styles.subContainer}>
                <View style={Styles.inputContainer}>
                    <TextInput
                        style={Styles.inputStyle}
                        placeholderTextColor={Color.PLACEHOLDER}
                        onChangeText={props.onChangeText}
                        value={props.value}
                        placeholder={props.placeholder}
                        keyboardType={props.keyboardType}
                        autoCapitalize={props.AutoCapitalize}
                    />


                    {props.errorMessage ?
                        <Text style={Styles.errorText}>{props.errorMessage}</Text>
                        : null
                    }

                </View>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: { marginBottom: 10 },
    label: { color: Color.TEXT_PRIMARY, marginLeft: 20, marginBottom: 5 },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '80%',
    },
    inputContainer: { flexDirection: 'column', flex: 1, },
    inputStyle: {
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: Color.DARK_GREY,
        backgroundColor: Color.WHITE,
        borderRadius: 10,
        color: Color.BLACK,
        marginBottom: 10,

    },
    errorText: { color: Color.RED, marginLeft: 20, marginBottom: 5 }


})
