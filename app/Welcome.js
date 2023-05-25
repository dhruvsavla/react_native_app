import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Pressable, Image } from 'react-native';
import { useFonts, Archivo_500Medium, Archivo_700Bold } from '@expo-google-fonts/archivo';


export default function Welcome(props) {
    let [fontsLoaded] = useFonts({
        Archivo_500Medium,
        Archivo_700Bold
      });

    const onPress= () => console.log("press")
    return (
        <SafeAreaView className="flex flex-col justify-between h-screen mx-4 mt-24">
            <View>
                <Text className = "text-4xl w-44 self-start" style={{ fontFamily: 'Archivo_700Bold' }}>yooo welcome!</Text>
                <Image source={require("/Users/dhruvsavla/Desktop/DoneWithIt/assets/mascot-waving-hi.png")}
                    style={{ width: '90%', height: '60%' }}
                    className="self-center mt-12"
                    resizeMode="contain"
                />
            </View>

            <View className="mb-40">
                <Pressable className="px-4 py-4 bg-blue-500 rounded-lg" onPress={onPress}>
                <View className = "gap-2 flex flex-row items-center justify-center">
                <Image
                  source={require('/Users/dhruvsavla/Desktop/DoneWithIt/assets/google_icon.png')}
                  resizeMode="contain"
                />
                    <Text className="text-white text-xl" style ={{fontFamily: 'Archivo_700Bold'}}>Continue with Google</Text>
                </View>
                </Pressable>
                <Text className = "text-sm self-center mt-4"  style = {{fontFamily: 'Archivo_500Medium', color: '#7B7B7B'}}>by  signing in, you accept to our terms & conditions and the privacy policy</Text>
            </View>
        </SafeAreaView>
        
    )
}

// https://docs.expo.dev/develop/user-interface/fonts/#use-a-google-font