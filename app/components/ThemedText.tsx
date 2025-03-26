import {Text, type TextProps, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body3: {
        fontSize: 10,
        lineHeight: 16,
    },
    Body2: {
        fontSize: 12,
        lineHeight: 16,
    },
    Body1: {
        fontSize: 14,
        lineHeight: 16,
    },
    Caption: {
        fontSize: 8,
        lineHeight: 12,
    },
    Headline: {
        fontSize: 24,
        lineHeight: 32,
    },
    Subtitle3: {
        fontSize: 10,
        lineHeight: 16,
    },
    Subtitle2: {
        fontSize: 12,
        lineHeight: 16,
    },
    Subtitle1: {
        fontSize: 14,
        lineHeight: 16,
    },
});

type Props = TextProps & {
    variant: keyof typeof styles;
    color: string;
};

export function ThemedText ({variant, color, ...rest}: Props) {
    return <Text style={styles[variant ?? 'body3']}{...rest}/>;
}