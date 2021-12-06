import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Feather from '@expo/vector-icons/Feather';

export const Container = styled.View`
  margin-bottom: ${RFValue(17)}px;
`;

export const Label = styled.Text`
  font-family: 'Rubik_400Regular';
  font-size: ${RFValue(15)}px;
  color: #888D97;
  margin-bottom: 7px;
`;

export const Error = styled.Text`
  color: #E83F5B;
  margin-bottom: 4px;
  font-family: 'Rubik_300Light';
  font-size: ${RFValue(13)}px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  background: #FFFFFF;
  border: 1px #e3e4e5;
  padding: 0 20px;
  border-radius: 4px;
  height: ${RFValue(56)}px;
  width: 100%;
`;

export const FormInput = styled(TextInput)`
  color: #3D434D;
  font-size: ${(RFValue(15))}px;
  flex: 1;
  height: 100%;
`;

export const ToggleShowPassButton = styled.Pressable`
  margin-left: 20px;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: '#888D97'
})`
  opacity: 0.6;
`;