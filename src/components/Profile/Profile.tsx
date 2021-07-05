import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';
import { Avatar } from '../Avatar';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler';
import { ModalSignOut } from '../../components/ModalSignOut';

export function Profile() {

    const { user, signOut } = useAuth();

    const [openModalSignOut, setOpenModalSignOut] = useState(false);

    function handleCloseModal() {
        setOpenModalSignOut(false);
    }

    function handleSignOut() {
        setOpenModalSignOut(true);
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={handleSignOut}>
                <Avatar urlImage={user.avatar} />
            </RectButton>
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>
                    <Text style={styles.username}>
                        {user.firstName}
                    </Text>
                </View>
                <Text style={styles.message}>
                    Hoje é dia de vitória
                </Text>
            </View>
            <ModalSignOut
                visible={openModalSignOut}
                closeModal={handleCloseModal}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.containerTitle}>
                    <Text style={styles.title1}>Deseja sair do </Text>
                    <Text style={styles.title2}>Game</Text>
                    <Text style={styles.title3}>Play</Text>
                    <Text style={styles.title2}>?</Text>
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity
                        style={styles.buttonNot}
                        activeOpacity={0.8}
                        onPress={handleCloseModal}
                    >
                        <Text style={styles.titleButtonNot}>Não</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonYes}
                        activeOpacity={0.8}
                        onPress={() => signOut()}
                    >
                        <Text style={styles.titleButtonNot}>Sim</Text>
                    </TouchableOpacity>
                </View>
            </ModalSignOut>
        </View>
    )
}