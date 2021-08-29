import React from 'react';
import { View, Text, TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import Input from '../Input';

import { styles } from './styles';
import ErrorText from '../../ErrorText';

interface IInputFormProps extends TextInputProps {
  control: Control;
  nameInput: string;
  isError: boolean;
  errorMessage: string;
}

const InputForm = ({
  control,
  nameInput,
  isError,
  errorMessage,
  ...rest
}: IInputFormProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View
        style={
          isError ? styles.containerWithError : styles.containerWithoutError
        }
      >
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              {...rest}
              value={value}
              onChangeText={onChange}
              hasError={isError ? true : false}
            />
          )}
          name={nameInput}
        />
      </View>
      {isError ? <ErrorText errorMessage={errorMessage} /> : <></>}
    </View>
  );
};

export default InputForm;
