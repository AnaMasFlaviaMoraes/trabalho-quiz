import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { options, texts } from '../styles/ui';


type Props = {
    label: string;
    letter: string;
    onPress: () => void;
    style?: ViewStyle;
};


export default function OptionCard({ label, letter, onPress, style }: Props) {
    return (
        <TouchableOpacity style={[options.base, style]} onPress={onPress}>
            <Text style={texts.optionText}><Text style={texts.optionLetter}>{letter}) </Text>{label}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    option: { backgroundColor: '#0b1220', borderColor: '#243145', borderWidth: 1, borderRadius: 12, paddingVertical: 12, paddingHorizontal: 14 },
    optionText: { color: '#e2e8f0', fontSize: 16 },
    optionLetter: { color: '#93c5fd', fontWeight: '800' },
});