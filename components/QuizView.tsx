import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { layout, texts } from '../styles/ui';
import OptionCard from './OptionCard';

export type QuizViewProps = {
  username: string;
  pergunta: { enunciado: string; alternativas: [string, string][], indiceAtual: number; total: number };
  onResponder: (letter: string) => void;
};

export default function QuizView({ username, pergunta, onResponder }: QuizViewProps) {
  const { enunciado, alternativas, indiceAtual, total } = pergunta;

  return (
    <SafeAreaView style={layout.container}>
      <Text style={texts.username}>Jogador: {username}</Text>
      <View style={{ alignItems: 'center', marginVertical: 8 }}>
        <Text style={texts.progress}>Pergunta {indiceAtual + 1} de {total}</Text>
      </View>

      <View style={layout.card}>
        <Text style={texts.question}>{enunciado}</Text>
        <FlatList
          data={alternativas}
          keyExtractor={([letter]) => String(letter)}
          renderItem={({ item }) => {
            const [letter, label] = item;
            return (
              <OptionCard
                letter={String(letter)}
                label={label}
                onPress={() => onResponder(letter)}
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
