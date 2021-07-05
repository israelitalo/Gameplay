import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        height: 234,
    },
    bannerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        paddingHorizontal: 24
    },
    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        lineHeight: 21
    },
    members: {
        width: '100%',
        marginLeft: 48,
        marginTop: 24,
    },
    footer: {
        flex: 1,
        width: '100%',
        height: 56,
        paddingHorizontal: 26,
        //paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
});