import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import { styles } from './styles';
import { GuildIcon } from '../GuildIcon';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../global/styles/themes';

export type PropsGuild = {
    id: string;
    name: string;
    icon: string | null,
    owner: boolean
}

type Prop = TouchableOpacityProps & {
    data: PropsGuild;
}

export function Guild({ data, ...rest }: Prop) {
    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}
            activeOpacity={0.7}
        >
            <GuildIcon guildId={data.id} iconId={data.icon}/>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>
                    <Text style={styles.subtitle}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather
                name="chevron-right"
                color={theme.colors.heading}
                size={24}
            />

        </TouchableOpacity>
    )
}