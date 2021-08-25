import React, {useState} from 'react';
import { View, Modal, SafeAreaView } from 'react-native';

import { styles } from './styles';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import TypeButton from '../../components/Form/TypeButton';
import InputSelect from '../../components/Form/InputSelect';
import CategorySelect from '../CategorySelect';

const Register = (): JSX.Element => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })
  
  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true)
  }
  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input placeholder="Name" />
        <View style={styles.divider} />
        <Input placeholder="Price" />
      </View>

      <View style={styles.containerTypeButton}>
        <TypeButton label="Income" />
        <TypeButton label="Outcome" />
      </View>

      <View style={styles.containerInputSelect}>
        <InputSelect categoryTitle={category.name} onPress={handleOpenCategoryModal}/>
      </View>

      <View style={styles.containerButton}>
        <Button label="Send" />
      </View>

      <Modal visible={categoryModalOpen} animationType="slide">
        <CategorySelect 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseCategoryModal}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Register;
