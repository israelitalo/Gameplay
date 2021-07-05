import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';
import {
    View,
    Text,
} from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';
import { theme } from '../../global/styles/themes';
import { PropsGuild } from '../../components/Guild';

export type AppointmentProps = {
    id: string;
    guild: PropsGuild,
    category: string;
    date: string;
    description: string;
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {

    const [category] = categories.filter(item => item.id === data.category);
    const { id, owner, icon, name } = data.guild;

    const { primary, on } = theme.colors;

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>
                    </View>

                    <View style={styles.footer}>

                        <View style={styles.dateInfo}>
                            <CalendarSvg />
                            <Text style={styles.date}>
                                {data.date}
                            </Text>
                        </View>

                        <View style={styles.playerInfo}>
                            <PlayerSvg fill={owner ? primary : on} />

                            <Text style={[
                                styles.player, { color: owner ? primary : on }
                            ]}>
                                {owner ? 'Anfitrição' : 'Visitante'}
                            </Text>
                        </View>

                    </View>

                </View>

            </View>
        </RectButton>
    )
}