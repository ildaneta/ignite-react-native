import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({
  title,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}