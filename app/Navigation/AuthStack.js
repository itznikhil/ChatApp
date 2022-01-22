import React, {useEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {COLORS} from '../Component/Constant/Color';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';
import {GoogleSignin} from '@react-native-community/google-signin';

const Stack = createStackNavigator();

export default function AuthStack() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '676813150531-aatam1nr79jfp2b7snl2ss0rqv5f9e2s.apps.googleusercontent.com',
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: COLORS.button},
        gestureEnabled: true,
        backgroundColor: COLORS.button,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Login"
      headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
