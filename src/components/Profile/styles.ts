import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    greeting: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 24,
        marginRight: 6
    },
    username: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 24,
    },
    message: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },
    containerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 19,
        marginBottom: 23,
    },
    title1: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading,
        fontSize: 24,
    },
    title2: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 24,
    },
    title3: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        fontSize: 24,
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24
    },
    buttonNot: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        height: 56,
        borderWidth: 1,
        borderColor: theme.colors.secondary30,
        marginRight: 8,
        borderRadius: 8,
    },
    buttonYes: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        height: 56,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        backgroundColor: theme.colors.primary,
        marginRight: 8,
        borderRadius: 8,
    },
    titleButtonNot: {
        flex: 1,
        color: theme.colors.heading,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    }
});