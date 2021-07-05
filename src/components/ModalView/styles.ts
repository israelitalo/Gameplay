import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    overley: {
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    container: {
        flex: 1,
        marginTop: 72,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.secondary30,
        alignSelf: 'center',
        marginTop: 13,
    }
});