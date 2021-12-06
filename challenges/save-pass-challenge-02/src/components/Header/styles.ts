import styled, { css } from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  hasUserData: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;
  padding: ${({ hasUserData }) => hasUserData
    ? `${getStatusBarHeight(true) + 16}px  24px 60px 24px`
    : `${getStatusBarHeight(true) + 9}px 0 23px 0`
  }
  ${({ hasUserData }) => hasUserData && css`
    justify-content: space-between;
  `}
`;

export const AboutUser = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  border-radius: 4px;
`;

export const TextContainer = styled.View`
  margin-left: 16px;
`;

export const HelloMessage = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(26)}px;
  font-family: 'Rubik_300Light';
  color: #ffffff;
`;

export const BoldText = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(26)}px;
  font-family: 'Rubik_500Medium';
  color: #ffffff;
`;

export const SecondaryMessage = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: 'Rubik_300Light';
  color: #ffffff;
`;

export const AddButton = styled.Pressable`
  padding: ${RFValue(14.5)}px;
  border: 1.5px #508bfc;
  border-radius: 4px;
`;

export const Icon = styled(Feather)``;

export const BackButton = styled.Pressable`
  position: absolute;
  left: 13px;
  bottom: 23px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: 'Rubik_500Medium';
  color: #3D434D;
  margin: auto;
`;