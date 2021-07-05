import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/themes';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    action?: ReactNode;
}

export function Header({
    title,
    action
}: Props) {

    const navigation = useNavigation();

    const { secondary100, secondary40, heading } = theme.colors;

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary100, secondary40]}
        >
            <BorderlessButton onPress={handleGoBack}>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={heading}
                />
            </BorderlessButton>
            <Text style={styles.title}>
                {title}
            </Text>
            {action
                ?
                <View style={styles.action}>
                    {action}
                </View>
                :
                <View style={{ width: 24 }} />

            }
        </LinearGradient>
    )
}