import React, { useState, useCallback } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList
} from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { Load } from '../../components/Load';
import { useNavigation, useFocusEffect } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function Home() {

    const navitagion = useNavigation();

    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(true);

    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetail(guildSelected: AppointmentProps) {
        navitagion.navigate('AppointmentDatail', { guildSelected});
    }

    async function getAppointments() {
        setLoading(true);
        const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const appointmentsList: AppointmentProps[] = storage ? JSON.parse(storage) : [];

        if (category) {
            setLoading(false);
            return setAppointments(appointmentsList.filter(item => item.category === category));
        }

        setAppointments(appointmentsList);
        setLoading(false);
    }

    useFocusEffect(useCallback(() => {
        getAppointments();
    }, [category]));

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Profile />
                    <ButtonAdd onPress={() => navitagion.navigate('AppointmentCreate')} />
                </View>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />

                {!loading ?
                    <>
                        <ListHeader
                            title="Partidas agendadas"
                            subtitle={`Total ${appointments.length}`}
                        />

                        <FlatList
                            data={appointments}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) =>
                                <Appointment
                                    onPress={() => handleAppointmentDetail(item)}
                                    data={item}
                                />
                            }
                            ItemSeparatorComponent={() => <ListDivider />}
                            contentContainerStyle={{ paddingBottom: 69 }}
                            style={styles.matches}
                            showsVerticalScrollIndicator={false}
                        />
                    </>
                    : <Load />}

            </SafeAreaView>
        </Background>
    )
}