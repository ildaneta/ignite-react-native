import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  View,
  Modal,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";

import InputForm from "../../components/Form/InputForm";
import Button from "../../components/Form/Button";
import TypeButton from "../../components/Form/TypeButton";
import InputSelect from "../../components/Form/InputSelect";
import CategorySelect from "../CategorySelect";
import theme from "../../global/styles/theme";
import { useAuthContext } from "../../context/AuthContext";

interface IFormData {
  name: string;
  price: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  price: Yup.number()
    .typeError("Please, insert a numeric value")
    .required("Price is required")
    .positive(`The value can't be negative'`),
});

const Register = (): JSX.Element => {
  const navigation = useNavigation();

  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("");

  const [category, setCategory] = useState({
    key: "category",
    name: "Category",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleOpenCategoryModal = () => {
    setCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setCategoryModalOpen(false);
  };

  const handleTransactionType = (type: "Income" | "Outcome") => {
    setTransactionType(type);
  };

  const handleSendRegister = async (form: IFormData) => {
    if (!transactionType) return Alert.alert("Select the kind of transaction");

    if (category.key === "category") return Alert.alert("Select the category");

    const newTransactionData = {
      id: String(new Date()),
      name: form.name,
      amount: form.price,
      category,
      type: transactionType,
      date: new Date(),
    };

    const { user } = useAuthContext();

    try {
      const transactionsKey = `@gofinances:transactions_user:${user.id}`;
      const data = await AsyncStorage.getItem(transactionsKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransactionData];

      await AsyncStorage.setItem(
        transactionsKey,
        JSON.stringify(dataFormatted)
      );

      reset();
      setTransactionType("");
      setCategory({ key: "category", name: "Category" });
      navigation.navigate("Listing");
    } catch (error) {
      console.log(error);
      Alert.alert("Was not possible to save");
    }
  };

  return (
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
            onPress={() => handleTransactionType("Income")}
            type="Income"
            isActive={transactionType === "Income"}
          />
          <TypeButton
            label="Outcome"
            onPress={() => handleTransactionType("Outcome")}
            type="Outcome"
            isActive={transactionType === "Outcome"}
          />
        </View>

        <View style={styles.containerInputSelect}>
          <InputSelect
            categoryTitle={category.name}
            onPress={handleOpenCategoryModal}
          />
        </View>

        <View style={styles.containerButton}>
          <Button
            label="Send"
            onPress={handleSubmit(handleSendRegister)}
            style={{
              backgroundColor: theme.colors.secondary,
            }}
          />
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
  );
};

export default Register;
