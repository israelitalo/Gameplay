import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import { styles } from './styles';
import { Guild } from '../Guild';
import { ListDivider } from '../ListDivider';
import { PropsGuild } from '../Guild/Guild';
import { Load } from '../Load';
import { api } from '../../services/api';

type Props = {
    handleGuildSelect: (guild: PropsGuild) => void;
}

export function GuildsModal({ handleGuildSelect }: Props) {

    const [guilds, setGhilds] = useState<PropsGuild[]>([]);
    const [loading, setLoading] = useState(true);

    async function getGuilds() {
        const response = await api.get('/users/@me/guilds');
        setGhilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        getGuilds();
    }, []);

    return (
        <View style={styles.container}>
            {!loading ? <FlatList
                data={guilds}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <Guild
                        onPress={() => handleGuildSelect(item)}
                        data={item}
                    />}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                contentContainerStyle={{ paddingBottom: 68 }}
            /> : <Load />}
        </View>
    )
}