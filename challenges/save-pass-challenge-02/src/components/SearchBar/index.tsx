import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container,
  Input,
  Button,
  Icon
} from './styles';

interface SearchBarProps extends TextInputProps {
  onSearchButtonPress: () => void;
}

export function SearchBar({
  style,
  onSearchButtonPress,
  ...rest
}: SearchBarProps) {
  return (
    <Container>
      <Input
        {...rest}
        placeholderTextColor='#888D97'
      />

      <Button onPress={onSearchButtonPress} testID="search-button">
        <Icon name="search" />
      </Button>
    </Container>
  )
}