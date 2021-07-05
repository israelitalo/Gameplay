import React from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    Alert,
    ActivityIndicator
} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/themes';

export function Signin() {

    const { signIn, loading } = useAuth();

    async function handleLogin() {
        try {
            await signIn();
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                    resizeMode="stretch"
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Text>
                </View>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Text>

                <View style={styles.footer}>
                    {loading
                        ? <ActivityIndicator color={theme.colors.primary} size="large" />
                        : <ButtonIcon onPress={handleLogin} title="Entrar com Discord" />
                    }
                </View>

            </SafeAreaView>
        </Background>
    )
}