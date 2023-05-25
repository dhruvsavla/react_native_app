import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import {useCallback} from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image } from 'react-native';
import Welcome from './app/Welcome';
import Profile from './app/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Archivo_500Medium, Archivo_700Bold } from '@expo-google-fonts/archivo';
import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

function MyStack() {
  let [fontsLoaded] = useFonts({
    Archivo_500Medium,
    Archivo_700Bold
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
      <View style={{ flex: 1, fontFamily: 'Archivo_500Medium' }}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
      </View>
  );
}

export default MyStack;
