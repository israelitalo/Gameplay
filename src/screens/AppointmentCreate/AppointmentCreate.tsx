import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { CategorySelect } from '../../components/CategorySelect';
import { theme } from '../../global/styles/themes';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { GuildsModal } from '../../components/GuildsModal';
import { PropsGuild } from '../../components/Guild';
import { GuildIcon } from '../../components/GuildIcon';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title?: string;
}

export function AppointmentCreate({ title = 'Agendar partida', ...rest }: Props) {

    const navigation = useNavigation();

    const [category, setCategory] = useState('');

    const [openModalGuilds, setOpenModalGuilds] = useState(false);

    const [guild, setGuild] = useState<PropsGuild>({} as PropsGuild);

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [description, setDescription] = useState('');

    function handleOpenModalGuild() {
        setOpenModalGuilds(true);
    }

    function handleGuildSelect(guildSelected: PropsGuild) {
        setGuild(guildSelected);
        setOpenModalGuilds(false);
    }

    function handleClosemodal() {
        setOpenModalGuilds(false);
    }

    async function handleSave() {
        let newAppointment = {
            id: uuid.v4(),
            guild,
            category,
            date: `${day}/${month} às ${hour}:${min}`,
            description
        }

        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointments = storage ? JSON.parse(storage) : [];

        await AsyncStorage.setItem(
            COLLECTION_APPOINTMENTS,
            JSON.stringify([...appointments, newAppointment])
        );

        navigation.goBack();
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}
                >
                    <Header
                        title={title}
                    />
                    <ScrollView>
                        <Text style={[
                            styles.label,
                            {
                                marginLeft: 24,
                                marginTop: 32,
                                marginBottom: 12
                            }
                        ]}>
                            Categoria
                        </Text>

                        <CategorySelect
                            hasCheckBox
                            setCategory={setCategory}
                            categorySelected={category}
                        />

                        <View style={styles.form}>
                            <RectButton onPress={handleOpenModalGuild}>
                                <View style={styles.select}>

                                    {guild.name
                                        ? <GuildIcon guildId={guild.id} iconId={guild.icon} />
                                        : <View style={styles.imageNull} />
                                    }

                                    <View style={styles.selectBody}>
                                        <Text style={styles.label}>
                                            {guild.name
                                                ? guild.name
                                                : 'Selecione um servidor'
                                            }
                                        </Text>
                                    </View>

                                    <Feather
                                        name="chevron-right"
                                        color={theme.colors.heading}
                                        size={20}
                                    />
                                </View>
                            </RectButton>

                            <View style={styles.field}>
                                <View>
                                    <Text style={[
                                        styles.label, { marginBottom: 12 }
                                    ]}>
                                        Dia e mês
                                    </Text>
                                    <View style={styles.column}>
                                        <SmallInput
                                            maxLength={2}
                                            onChangeText={setDay}
                                        />
                                        <Text style={styles.divider}>
                                            /
                                        </Text>
                                        <SmallInput
                                            maxLength={2}
                                            onChangeText={setMonth}
                                        />
                                    </View>
                                </View>

                                <View>
                                    <Text style={[
                                        styles.label, { marginBottom: 12 }
                                    ]}>
                                        Hora e minuto
                                    </Text>
                                    <View style={styles.column}>
                                        <SmallInput
                                            maxLength={2}
                                            onChangeText={setHour}
                                        />
                                        <Text style={styles.divider}>
                                            :
                                        </Text>
                                        <SmallInput
                                            maxLength={2}
                                            onChangeText={setMin}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.containerLabelTextArea}>
                                <Text style={styles.label}>
                                    Descrição
                                </Text>
                                <Text style={styles.maxCaracteresTextArea}>
                                    Max 100 caracteres
                                </Text>
                            </View>

                            <TextArea
                                multiline
                                maxLength={100}
                                numberOfLines={5}
                                autoCorrect={false}
                                onChangeText={setDescription}
                            />

                        </View>

                        <View style={styles.footer}>
                            <ButtonIcon
                                action={false}
                                title="Agendar"
                                onPress={handleSave}
                            />
                        </View>
                    </ScrollView>
                    <ModalView
                        closeModal={handleClosemodal}
                        visible={openModalGuilds}
                        onRequestClose={handleClosemodal}
                    >
                        <GuildsModal
                            handleGuildSelect={handleGuildSelect}
                        />
                    </ModalView>
                </KeyboardAvoidingView>
            </SafeAreaView >
        </Background>
    )
}