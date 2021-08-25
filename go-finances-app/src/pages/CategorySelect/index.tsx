import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import Category from '../../components/Category';
import Button from '../../components/Form/Button';
import { categories } from '../../utils/categories';

import { styles } from './styles';

interface Category {
  key: string
  name: string
}

interface ICategorySelectProps {
  category: Category;
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

const CategorySelect = ({
  category, 
  setCategory, 
  closeSelectCategory
}: ICategorySelectProps): JSX.Element => {
  const handleCategorySelect = (item: Category) => {
    setCategory(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category 
            categoryName={item.name} 
            iconName={item.icon} 
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          />
        )}
      />

      <View style={styles.containerButton}>
        <Button label="Select" onPress={closeSelectCategory}/>
      </View>
    </SafeAreaView>
  );
};

export default CategorySelect;
