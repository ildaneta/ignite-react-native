import React from "react";
import { View, Text, Image } from "react-native";
import theme from "../../global/styles/theme";
import {
  BorderlessButton,
  BorderlessButtonProperties,
} from "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

interface LogoutButton extends BorderlessButtonProperties {
  uri: string;
  name: string;
}

const Header = ({ uri, name, ...rest }: LogoutButton): JSX.Element => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerUser}>
        <Image
          style={styles.userImage}
          source={{
            uri: uri,
          }}
        />

        <View>
          <Text style={styles.greetings}>Hello,</Text>
          <Text style={styles.userName}>{name}</Text>
        </View>
      </View>

      <BorderlessButton style={styles.logoff} {...rest}>
        <AntDesign name="poweroff" color={theme.colors.attention} size={24} />
      </BorderlessButton>
    </View>
  );
};

export default Header;
