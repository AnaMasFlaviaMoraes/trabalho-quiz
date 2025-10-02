
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { buttons, inputs, layout, texts } from '../styles/ui';

export default function LoginScreen() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const isValid = nome.trim() !== '' && email.trim() !== '';


    const handleStart = () => {
        // const trimmed = nome.trim();
        if (!isValid) return;
        router.push({ pathname: '/quiz', params: { username: nome, email: email } });
    };
    

    console.log('nome:', nome, 'email:', email, 'isValid:', isValid);



    return (
        <View style={layout.container}>
            <Text style={texts.title}>Quiz de Harry Potter</Text>
            <Text style={texts.subtitle}>Entre com seu nome para começar</Text>

            <TextInput
                style={inputs.text}
                placeholder="Seu nome"
                placeholderTextColor="#9aa0a6"
                value={nome}
                onChangeText={setNome}
                autoCapitalize="words"
                returnKeyType="done"
                onSubmitEditing={() => { if (isValid) handleStart(); }}
            />

            <Text style={texts.subtitle}>Entre com seu email</Text>
            <TextInput
                style={inputs.text}
                placeholder="Seu email"
                placeholderTextColor="#9aa0a6"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="words"
                returnKeyType="done"
                onSubmitEditing={handleStart}
            />


            <TouchableOpacity 
                style={
                    [
                        buttons.primary, 
                        !nome.trim() && buttons.disabled
                    ]
                } 
                onPress={handleStart} 
                >
                <Text style={buttons.primaryText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}
