import React, { useEffect, useState } from 'react';
import { BackHandler, Image, Keyboard, View } from 'react-native';
import useOrientation from '../../components/useOrientation';
import Logo from '../../Asstes/Logo1.png'
import { Styles } from './style'
import FloatingInputText from '../../components/EditTextInput';
import { Color } from '../../utils/color';
import Button from '../../components/Button';
import { validation } from '../../utils/validation';
import { useDispatch } from 'react-redux'
import { fetchVideoData } from '../../Redux/action'

function Login(props) {
    const orientation = useOrientation();
    const isPortrait = orientation.isPortrait
    const [email, setEmail] = useState('')
    const [password, setPasword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const dispatch = useDispatch()

    const onClickLogin = () => {
        Keyboard.dismiss();
        let emailError, passError;
        emailError = validation('email', email.trim());
        passError = validation('password', password.trim());
        if (emailError != null || passError != null) {
            setPasswordError(passError)
            setEmailError(emailError)

        }
        else {
            dispatch(fetchVideoData())
            setPasswordError()
            setEmailError()
            props.navigation.push('Video')
        }

    }
    return (
        <View style={[Styles.container,{flexDirection: isPortrait ? 'column' : 'row'}]}>
            <View style={Styles.imgContainer}>
                <Image
                    style={Styles.tinyLogo}
                    source={Logo}
                    resizeMode='contain'
                />

            </View>
            <View style={Styles.secondContainer}>
                <FloatingInputText
                    onChangeText={(e) => { setEmail(e) }}
                    value={email}
                    keyboardType={'email-address'}
                    placeholder={"Email"}
                    errorMessage={emailError}
                />
                <FloatingInputText
                    onChangeText={(e) => { setPasword(e) }}
                    value={password}
                    placeholder={"Password"}
                    errorMessage={passwordError}
                />
                <Button
                    label={'Login'}
                    onPress={onClickLogin}
                />
            </View>

        </View>
    );
}

export default Login;
