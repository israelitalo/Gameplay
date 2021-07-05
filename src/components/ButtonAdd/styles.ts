import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
        height: 48,
        width: 48,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});