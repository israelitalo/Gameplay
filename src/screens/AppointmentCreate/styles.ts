import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../global/styles/themes';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center'
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
    },
    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },
    select: {
        width: '100%',
        flexDirection: 'row',
        height: 68,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden',
    },
    selectBody: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 20
    },
    imageNull: {
        width: 64,
        height: 68,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary40,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
    },
    footer: {
        alignItems: 'center',
        marginTop: 28,
        paddingHorizontal: 24,
        marginBottom: Platform.OS === 'ios' ? getBottomSpace() : 14
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    divider: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        marginHorizontal: 8
    },
    containerLabelTextArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 12
    },
    maxCaracteresTextArea: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    }
});