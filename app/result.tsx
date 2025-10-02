import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttons, layout, texts } from '../styles/ui';


export default function ResultScreen() {
    const { username, email, score, total } = useLocalSearchParams<
    { username: string; email: string; score: string; total: string }
    >();
    const router = useRouter();


    const reiniciar = () => router.replace({ pathname: '/quiz', params: { username, email } });
    const trocarUsuario = () => router.replace('/');


    return (
        <View style={layout.container}>
            <Text style={texts.title}>Resultado</Text>
            <View style={layout.card}>
                <Text style={texts.result}>Parabéns, <Text style={texts.bold}>{username}</Text>!</Text>
                <Text style={texts.result}>Você acertou <Text style={texts.bold}>{score}</Text> de <Text style={texts.bold}>{total}</Text> perguntas.</Text>
            </View>

            <View style={layout.card}> 
                <Text style={texts.subtitle} >Você entrou com o e-mail</Text>
                <Text style={texts.email}>{email}</Text>
            </View>
            <TouchableOpacity style={buttons.primary} onPress={reiniciar}>
                <Text style={buttons.primaryText}>Reiniciar Quiz</Text>
            </TouchableOpacity>


            <TouchableOpacity style={buttons.secondary} onPress={trocarUsuario}>
                <Text style={buttons.secondaryText}>Trocar usuário</Text>
            </TouchableOpacity>
        </View>
    );
}

