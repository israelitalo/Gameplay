import React from 'react';
import {
    ScrollView,
    Text,
    Image,
} from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../../components/Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({
    categorySelected,
    setCategory,
    hasCheckBox = false
}: Props) {
    return (
        <ScrollView
            style={styles.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {categories.map((category) => (
                <Category
                    key={category.id}
                    onPress={() => setCategory(category.id)}
                    title={category.title}
                    icon={category.icon}
                    checked={category.id === categorySelected}
                    hasCheckBox={hasCheckBox}
                />
            ))}
        </ScrollView>
    )
}