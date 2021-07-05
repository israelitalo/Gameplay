import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    overley: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
        justifyContent: 'flex-end'
    },
    container: {
        height: 174,
        width: '100%',
    },
});