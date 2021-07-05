import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 95,
        paddingLeft: 16,
        paddingTop: 16,
        backgroundColor: theme.colors.secondary40,
        color: theme.colors.heading,
        borderRadius: 8,
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        textAlignVertical: 'top'
    }
});