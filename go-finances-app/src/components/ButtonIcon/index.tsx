import {
  ReactElement,
  SVGProps,
} from "hoist-non-react-statics/node_modules/@types/react";
import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";

interface IButtonIconProps extends RectButtonProps {
  label: string;
  icon: ReactElement<SVGProps<SVGElement>>;
}

const ButtonIcon = ({
  label,
  icon,
  ...rest
}: IButtonIconProps): JSX.Element => {
  const { onPress } = { ...rest };
  return (
    <RectButton style={styles.container} onPress={onPress}>
      <View style={styles.containerIcon}>{icon}</View>
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  );
};

export default ButtonIcon;
