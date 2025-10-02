import { StyleSheet } from 'react-native';
import { colors, radius, spacing, typography } from './theme';

export const layout = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        padding: spacing.xl,
    },
    card: {
        backgroundColor: colors.surface,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radius.lg,
        padding: spacing.lg,
        marginTop: spacing.sm,
    },
    centeredText: { textAlign: 'center' as const },
});


export const texts = StyleSheet.create({
    title: { ...typography.title, color: colors.text, textAlign: 'center' as const, marginTop: spacing.lg },
    subtitle: { ...typography.body, color: colors.textSoft, textAlign: 'center' as const, marginBottom: spacing.sm, marginTop: 15 },
    username: { color: '#a5b4fc', fontWeight: '600', textAlign: 'center' as const, marginTop: spacing.xs },
    progress: { color: colors.textSoft },
    question: { ...typography.h2, color: '#e5e7eb', marginBottom: spacing.md },
    result: { color: colors.text, fontSize: 18, textAlign: 'center' as const, marginVertical: spacing.xs },
    bold: { fontWeight: '800', color: colors.highlight },
    optionText: { color: colors.text, ...typography.body },
    optionLetter: { color: colors.accentSoft, fontWeight: '800' },
    email: { ...typography.body, color: colors.highlight, textAlign: 'center' as const, marginBottom: spacing.sm, marginTop: 15 },
});


export const inputs = StyleSheet.create({
    text: {
        backgroundColor: colors.surface,
        borderColor: colors.borderSoft,
        borderWidth: 1,
        borderRadius: radius.md,
        color: '#e5e7eb',
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginTop: spacing.sm,
    },
});


export const buttons = StyleSheet.create({
    primary: {
        backgroundColor: colors.accent,
        borderRadius: radius.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: spacing.md,
    },
    primaryText: { color: '#f8fafc', fontWeight: '700', fontSize: 16 },
    secondary: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.borderSoft,
        borderRadius: radius.md,
        paddingVertical: 14,
        alignItems: 'center',
        marginTop: spacing.md,
    },
    secondaryText: { color: colors.text },
    disabled: { opacity: 0.5 },
});


export const options = StyleSheet.create({
    base: {
        backgroundColor: colors.optionBg,
        borderColor: colors.optionBorder,
        borderWidth: 1,
        borderRadius: radius.md,
        paddingVertical: 12,
        paddingHorizontal: 14,
    },
});

export const div = StyleSheet.create({
    separator: { 
        marginTop: 100,

    }
});