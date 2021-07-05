import React, { ReactNode } from 'react';
import {
    View,
    Modal,
    ModalProps,
    TouchableWithoutFeedback
} from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';
import { Background } from '../Background';

type Props = ModalProps & {
    children: ReactNode;
    closeModal: () => void;
}

export function ModalView({
    children,
    closeModal,
    ...rest
}: Props) {

    return (
        <Modal
            {...rest}
            transparent
            animationType="slide"
            statusBarTranslucent
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.overley}>
                    <View style={styles.container}>
                        <Background>
                            <View style={styles.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}