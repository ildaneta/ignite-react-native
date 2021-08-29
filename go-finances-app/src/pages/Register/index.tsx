import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Modal,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { styles } from './styles';

import InputForm from '../../components/Form/InputForm';
import Button from '../../components/Form/Button';
import TypeButton from '../../components/Form/TypeButton';
import InputSelect from '../../components/Form/InputSelect';
import CategorySelect from '../CategorySelect';
import theme from '../../global/styles/theme';

interface IFormData {
  name: string;
  price: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.number()
    .typeError('Please, insert a numeric value')
    .required('Price is required')
    .positive(`The value can't be negative'`),
});

const Register = (): JSX.Element => {
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState('');

  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  const handleTransactionType = (type: 'Income' | 'Outcome') => {
    setTransactionType(type);
  };

  const handleSendRegister = (form: IFormData) => {
    if (!transactionType) return Alert.alert('Selecione o tipo da transação');

    if (category.key === 'category')
      return Alert.alert('Selecione a categoria');

    const data = {
      name: form.name,
      price: form.price,
      category,
      transactionType,
    };

    return console.log(data);
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.form}>
            <InputForm
              control={control}
              nameInput="name"
              placeholder="Name"
              autoCapitalize="sentences"
              autoCorrect={false}
              isError={errors.name ? true : false}
              errorMessage={errors.name && errors.name.message}
            />

            <View style={styles.divider} />

            <InputForm
              control={control}
              nameInput="price"
              placeholder="Price"
              keyboardType="numeric"
              isError={errors.price ? true : false}
              errorMessage={errors.price && errors.price.message}
            />
          </View>

          <View style={styles.containerTypeButton}>
            <TypeButton
              label="Income"
              onPress={() => handleTransactionType('Income')}
              type="Income"
              isActive={transactionType === 'Income'}
            />
            <TypeButton
              label="Outcome"
              onPress={() => handleTransactionType('Outcome')}
              type="Outcome"
              isActive={transactionType === 'Outcome'}
            />
          </View>

          <View style={styles.containerInputSelect}>
            <InputSelect
              categoryTitle={category.name}
              onPress={handleOpenCategoryModal}
            />
          </View>
          <View style={styles.containerButton}>
            <Button label="Send" onPress={handleSubmit(handleSendRegister)} />
          </View>

          <Modal visible={categoryModalOpen} animationType="slide">
            <CategorySelect
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseCategoryModal}
            />
          </Modal>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Register;
