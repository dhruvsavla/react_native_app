import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, SafeAreaView, Pressable, Image } from 'react-native';
import { useFonts, Archivo_500Medium, Archivo_700Bold } from '@expo-google-fonts/archivo';

export default function Profile(props) {
    let [fontsLoaded] = useFonts({
        Archivo_500Medium,
        Archivo_700Bold
    });

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    return (

        <SafeAreaView  className="flex flex-col mx-4 mt-22">
            <Text className="text-4xl" style={{ fontFamily: "Archivo_700Bold" }}>let's get to know you better.</Text>
            <Image source={require("/Users/dhruvsavla/Desktop/DoneWithIt/assets/mascot-playing.png")}
                style={{ width: '100%', height: '55%' }}
                className="self-center mt-5"
                resizeMode="contain" />
            <Text className="text-xl ml-5" style={{ fontFamily: 'Archivo_500Medium' }}>name </Text>
            <TextInput className = "ml-5 mt-2 rounded-lg border-2" style = {{width: '80%', height: '7%',fontFamily: 'Archivo_500Medium'}}
                value={inputValue}
                onChangeText={handleInputChange}
                placeholder="Type your name..."
            />
            
        </SafeAreaView>
    );
}