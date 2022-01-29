
   
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import User from '../screens/User'
import Video from '../screens/Video';
import { Color } from '../utils/color';


const Stack = createNativeStackNavigator();
const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
    
  };
const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
           
                <Stack.Screen name={'User'} component={User} options={{
                    headerShown: false,
                }} />
                 <Stack.Screen name={'Video'}
                  component={Video} 
                  options={{
                    headerShown: false,
                }}
               
              />
               

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;