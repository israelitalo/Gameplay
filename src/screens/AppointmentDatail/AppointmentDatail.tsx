import React, { useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ImageBackground,
    FlatList,
    Alert,
    Share,
    Platform
} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { Load } from '../../components/Load';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member, MemberProps } from '../../components/Member';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { theme } from '../../global/styles/themes';
import BannerImg from '../../assets/banner.png';
import { useRoute } from '@react-navigation/native';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { useState } from 'react';
import * as Linking from 'expo-linking';

type Params = {
    guildSelected: AppointmentProps;
}

type Props = {
    title?: string;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
    presence_count: number;
}

export function AppointmentDatail({ title = 'Detalhes', ...rest }: Props) {

    const { params } = useRoute();
    const { guildSelected } = params as Params;
    const [loading, setLoading] = useState(true);
    const [widgets, setWidget] = useState<GuildWidget>({} as GuildWidget);

    async function getWidgets() {
        setLoading(true);
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
        } catch (error) {
            Alert.alert('Problema no Widget do Discord', 'Verifique as permissões de widgets deste servidor, ative-as e tente novamente.');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {

        if (!guildSelected.guild.owner) {
            return Alert.alert('Problema no Widget do Discord',
                'Verifique as permissões de widgets deste servidor, ative-as e tente novamente.');
        }

        let message = Platform.OS === 'ios'
            ? `Junte-se a ${guildSelected.guild.name}`
            : widgets.instant_invite || 'Erro no convite';

        Share.share({
            message,
            url: widgets.instant_invite
        });
    }

    function handleOpenGuild() {
        Linking.openURL(widgets.instant_invite);
    }

    useEffect(() => {
        getWidgets();
    }, []);

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Header
                    title={title}
                    action={
                        <BorderlessButton onPress={handleShareInvitation}>
                            <Fontisto
                                name="share"
                                size={22}
                                color={theme.colors.primary}
                            />
                        </BorderlessButton>
                    }
                />
                <ImageBackground
                    style={styles.banner}
                    source={BannerImg}
                >
                    <View style={styles.bannerContainer}>
                        <Text style={styles.title}>{guildSelected.guild.name}</Text>
                        <Text style={styles.subtitle}>
                            {guildSelected.description}
                        </Text>
                    </View>
                </ImageBackground>

                {!loading ?
                    <>
                        {guildSelected.guild.owner &&
                            <ListHeader
                                title="Jogadores"
                                subtitle={`Total ${widgets?.members?.length || 0}`}
                            />
                        }

                        <FlatList
                            data={widgets.members}
                            renderItem={({ item }) => <Member data={item} />}
                            keyExtractor={(item) => item.id}
                            ItemSeparatorComponent={() => <ListDivider isCentered />}
                            style={styles.members}
                            contentContainerStyle={{ paddingBottom: 80 }}
                        />
                        {guildSelected.guild.owner &&
                            <View style={styles.footer}>
                                <ButtonIcon
                                    onPress={handleOpenGuild}
                                    title="Entrar no servidor do Discord"
                                />
                            </View>
                        }
                    </>
                    : <Load />}

            </SafeAreaView>
        </Background>
    )
}