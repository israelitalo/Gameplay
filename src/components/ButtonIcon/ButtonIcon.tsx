import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import {
    Text,
    View,
    Image,
} from 'react-native';
import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

type Props = RectButtonProps & {
    title: string;
    action?: boolean;
}

export function ButtonIcon({
    title,
    action = true,
    ...rest
}: Props) {
    return (
        <RectButton style={styles.container} {...rest}>
            {action &&
                <View style={styles.iconWrapper}>
                    <Image source={DiscordImg} style={styles.icon} />
                </View>
            }
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}