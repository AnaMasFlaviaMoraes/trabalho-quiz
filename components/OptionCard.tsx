import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
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
