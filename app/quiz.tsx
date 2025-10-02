import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import QuizView from '../components/QuizView';
import { QUESTION_BANK } from '../constants/questions';
import { shuffle } from '../utils/shuffle';

export default function QuizRoute() {
  const { username = '' } = useLocalSearchParams<{ username?: string }>();
  const { email = '' } = useLocalSearchParams<{ email?: string }>();
  const router = useRouter();

  const perguntas = useMemo(() => shuffle(QUESTION_BANK).slice(0, 5), []);
  const [i, setI] = useState(0);
  const [acertos, setAcertos] = useState(0);

  const atual = perguntas[i];

  const onResponder = (letter: string) => {
    const acertou = letter === atual.correta;
    if (acertou) setAcertos(v => v + 1);

    const next = i + 1;
    if (next < perguntas.length) {
      setI(next);
    } else {
      router.replace(
        { 
            pathname: '/result',
            params: { 
                username,
                email,
                score: String(acertos + (acertou ? 1 : 0)),
                total: String(perguntas.length) 
            }
         }
        );
    }
  };

  return (
    <QuizView
      username={String(username)}
      pergunta={{
        enunciado: atual.pergunta,
        alternativas: Object.entries(atual.alternativas) as [string, string][],
        indiceAtual: i,
        total: perguntas.length,
      }}
      onResponder={onResponder}
    />
  );
}