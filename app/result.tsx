import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { buttons, layout, texts } from '../styles/ui';


export default function ResultScreen() {
    const { username, score, total } = useLocalSearchParams<{ username: string; score: string; total: string }>();
    const router = useRouter();


    const reiniciar = () => router.replace({ pathname: '/quiz', params: { username } });
    const trocarUsuario = () => router.replace('/');


    return (
        <SafeAreaView style={layout.container}>
            <Text style={texts.title}>Resultado</Text>
            <View style={layout.card}>
                <Text style={texts.result}>Parabéns, <Text style={texts.bold}>{username}</Text>!</Text>
                <Text style={texts.result}>Você acertou <Text style={texts.bold}>{score}</Text> de <Text style={texts.bold}>{total}</Text> perguntas.</Text>
            </View>


            <TouchableOpacity style={buttons.primary} onPress={reiniciar}>
                <Text style={buttons.primaryText}>Reiniciar Quiz</Text>
            </TouchableOpacity>


            <TouchableOpacity style={buttons.secondary} onPress={trocarUsuario}>
                <Text style={buttons.secondaryText}>Trocar usuário</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

