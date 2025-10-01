import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import OptionCard from '../components/OptionCard';
import { QUESTION_BANK, Question } from '../constants/questions';
import { shuffle } from '../lib/shuffle';
import { layout, texts } from '../styles/ui';


export default function QuizScreen() {
    const { username } = useLocalSearchParams<{ username: string }>();
    const router = useRouter();


    const perguntas: Question[] = useMemo(() => shuffle(QUESTION_BANK).slice(0, 5), []);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [acertos, setAcertos] = useState(0);
    const perguntaAtual = perguntas[indiceAtual];


    const handleResposta = (key: keyof Question['alternativas']) => {
        const acertou = key === perguntaAtual.correta;
        if (acertou) setAcertos((prev) => prev + 1);


        const proximo = indiceAtual + 1;
        if (proximo < perguntas.length) {
            setIndiceAtual(proximo);
        } else {
            router.replace({ pathname: '/result', params: { username, score: String(acertos + (acertou ? 1 : 0)), total: String(perguntas.length) } });
        }
    };


    const alternativasEntries = Object.entries(perguntaAtual.alternativas) as [keyof Question['alternativas'], string][];


    return (
        <SafeAreaView style={layout.container}>
            <Text style={texts.username}>Jogador: {username}</Text>
            <View style={{ alignItems: 'center', marginVertical: 8 }}>
                <Text style={texts.progress}>Pergunta {indiceAtual + 1} de {perguntas.length}</Text>
            </View>


            <View style={layout.card}>
                <Text style={texts.question}>{perguntaAtual.pergunta}</Text>
                <FlatList
                    data={alternativasEntries}
                    keyExtractor={([letter]) => String(letter)}
                    renderItem={({ item }) => {
                        const [letter, label] = item;
                        return (
                            <OptionCard
                                letter={String(letter)}
                                label={label}
                                onPress={() => handleResposta(letter)}
                                style={{ marginBottom: 10 }}
                            />
                        );
                    }}
                    contentContainerStyle={{ paddingVertical: 8 }}
                />
            </View>
        </SafeAreaView>
    );
}

