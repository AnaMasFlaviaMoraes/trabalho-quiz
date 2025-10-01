export type AlternativeKey = 'a' | 'b' | 'c' | 'd';
export type Question = {
    id: string;
    pergunta: string;
    alternativas: Record<AlternativeKey, string>;
    correta: AlternativeKey;
};


export const QUESTION_BANK: Question[] = [
    { id: 'q1', pergunta: 'Qual é o nome da coruja de Harry Potter?', alternativas: { a: 'Bicuço', b: 'Edwiges', c: 'Fawkes', d: 'Aragog' }, correta: 'b' },
    { id: 'q2', pergunta: 'Qual casa de Hogwarts tem o leão como símbolo?', alternativas: { a: 'Lufa-Lufa', b: 'Corvinal', c: 'Grifinória', d: 'Sonserina' }, correta: 'c' },
    { id: 'q3', pergunta: 'Quem é o diretor de Hogwarts na maior parte da série?', alternativas: { a: 'Severo Snape', b: 'Minerva McGonagall', c: 'Alvo Dumbledore', d: 'Remo Lupin' }, correta: 'c' },
    { id: 'q4', pergunta: 'Qual é o feitiço usado para desarmar um oponente?', alternativas: { a: 'Expelliarmus', b: 'Lumos', c: 'Expecto Patronum', d: 'Wingardium Leviosa' }, correta: 'a' },
    { id: 'q5', pergunta: 'Quem é o padrinho de Harry Potter?', alternativas: { a: 'Rúbeo Hagrid', b: 'Sirius Black', c: 'Arthur Weasley', d: 'Alastor Moody' }, correta: 'b' },
    { id: 'q6', pergunta: 'Qual é o nome do banco dos bruxos no Beco Diagonal?', alternativas: { a: 'Gringotes', b: 'Azkaban', c: 'Borgin & Burkes', d: 'Madame Malkin' }, correta: 'a' },
    { id: 'q7', pergunta: 'Qual é o esporte bruxo jogado em vassouras?', alternativas: { a: 'Explodiu Snap', b: 'Quadribol', c: 'Xadrez Bruxo', d: 'Duelo de Varinhas' }, correta: 'b' },
    { id: 'q8', pergunta: 'Quem mata Dumbledore?', alternativas: { a: 'Draco Malfoy', b: 'Bellatrix Lestrange', c: 'Severo Snape', d: 'Lord Voldemort' }, correta: 'c' },
    { id: 'q9', pergunta: 'Qual o cargo de Arthur Weasley no Ministério da Magia?', alternativas: { a: 'Auror', b: 'Departamento de Execução das Leis da Magia', c: 'Departamento de Transportes Mágicos', d: 'Escritório de Uso Indevido de Artefatos dos Trouxas' }, correta: 'd' },
    { id: 'q10', pergunta: 'Qual é o Patrono de Harry?', alternativas: { a: 'Cervo', b: 'Fênix', c: 'Cão', d: 'Lobo' }, correta: 'a' },
    { id: 'q11', pergunta: 'Quem é o Príncipe Mestiço?', alternativas: { a: 'Tom Riddle', b: 'Draco Malfoy', c: 'Severo Snape', d: 'Horácio Slughorn' }, correta: 'c' },
    { id: 'q12', pergunta: 'Qual destes NÃO é uma Horcrux?', alternativas: { a: 'Diário de Tom Riddle', b: 'Taça de Helga Lufa-Lufa', c: 'Espelho de Ojesed', d: 'Anel de Marvolo Gaunt' }, correta: 'c' },
    { id: 'q13', pergunta: 'Qual é a plataforma do Expresso de Hogwarts na King’s Cross?', alternativas: { a: '9', b: '10', c: '9¾', d: '8¾' }, correta: 'c' },
    { id: 'q14', pergunta: 'Quem é o guardião das chaves e terrenos de Hogwarts?', alternativas: { a: 'Argus Filch', b: 'Rúbeo Hagrid', c: 'Remo Lupin', d: 'Newt Scamander' }, correta: 'b' },
    { id: 'q15', pergunta: 'Qual feitiço conjura luz na ponta da varinha?', alternativas: { a: 'Alohomora', b: 'Lumos', c: 'Obliviate', d: 'Reparo' }, correta: 'b' },
    { id: 'q16', pergunta: 'Quem é o elfo doméstico que tenta “proteger” Harry em Câmara Secreta?', alternativas: { a: 'Dobby', b: 'Kreacher', c: 'Winky', d: 'Hokey' }, correta: 'a' },
    { id: 'q17', pergunta: 'Qual objeto escolhe os alunos para suas casas?', alternativas: { a: 'O Mapa do Maroto', b: 'A Penseira', c: 'O Chapéu Seletor', d: 'O Vira-Tempo' }, correta: 'c' },
    { id: 'q18', pergunta: 'Quem é o lobo-homem professor de Defesa Contra as Artes das Trevas?', alternativas: { a: 'Remo Lupin', b: 'Quirino Quirrell', c: 'Gilderoy Lockhart', d: 'Severo Snape' }, correta: 'a' },
    { id: 'q19', pergunta: 'Qual é o nome verdadeiro de Voldemort?', alternativas: { a: 'Tom Servolo Riddle', b: 'Gellert Grindelwald', c: 'Percival Dumbledore', d: 'Salazar Slytherin' }, correta: 'a' },
    { id: 'q20', pergunta: 'Que criatura guarda a Câmara Secreta?', alternativas: { a: 'Acromântula', b: 'Basilisco', c: 'Testrálio', d: 'Hipogrifo' }, correta: 'b' },
    { id: 'q21', pergunta: 'Qual destes é um feitiço das Relíquias da Morte?', alternativas: { a: 'Avada Kedavra', b: 'Crucio', c: 'Imperio', d: 'Nenhum, Relíquias não são feitiços' }, correta: 'd' },
    { id: 'q22', pergunta: 'Quem dá a Harry o Mapa do Maroto?', alternativas: { a: 'Fred e George Weasley', b: 'Hermione Granger', c: 'Sirius Black', d: 'Remo Lupin' }, correta: 'a' },
    { id: 'q23', pergunta: 'Qual animal representa a Sonserina?', alternativas: { a: 'Águia', b: 'Texugo', c: 'Serpente', d: 'Leão' }, correta: 'c' },
    { id: 'q24', pergunta: 'Qual é o feitiço para abrir fechaduras?', alternativas: { a: 'Alohomora', b: 'Finite', c: 'Accio', d: 'Colloportus' }, correta: 'a' },
    { id: 'q25', pergunta: 'Quem foi o vencedor do Torneio Tribruxo junto com Harry?', alternativas: { a: 'Cedrico Diggory', b: 'Viktor Krum', c: 'Fleur Delacour', d: 'Neville Longbottom' }, correta: 'a' },
    { id: 'q26', pergunta: 'Qual professor ensina Poções nos primeiros anos de Harry?', alternativas: { a: 'Horácio Slughorn', b: 'Severo Snape', c: 'Filius Flitwick', d: 'Pomona Sprout' }, correta: 'b' },
    { id: 'q27', pergunta: 'Qual é o nome do jornal bruxo mais famoso?', alternativas: { a: 'O Profeta Diário', b: 'Pasquim', c: 'O Observador', d: 'Correio Mágico' }, correta: 'a' },
    { id: 'q28', pergunta: 'Quem é a melhor amiga de Harry?', alternativas: { a: 'Luna Lovegood', b: 'Hermione Granger', c: 'Gina Weasley', d: 'Cho Chang' }, correta: 'b' },
    { id: 'q29', pergunta: 'Que criatura só pode ser vista por quem presenciou a morte?', alternativas: { a: 'Testrálio', b: 'Trasgo', c: 'Bicuço', d: 'Kneazle' }, correta: 'a' },
    { id: 'q30', pergunta: 'Qual é a poção que faz a pessoa ter sorte por um período?', alternativas: { a: 'Amortentia', b: 'Veritaserum', c: 'Felix Felicis', d: 'Polissuco' }, correta: 'c' },
];