import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import theme from '../../global/styles/theme';

import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const Header = (): JSX.Element => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.containerUser}>
        <Image
          style={styles.userImage}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/21963291?v=4',
          }}
        />

        <View>
          <Text style={styles.greetings}>Hello,</Text>
          <Text style={styles.userName}>Ilda</Text>
        </View>
      </View>

      <TouchableWithoutFeedback style={styles.logoff}>
        <AntDesign name="poweroff" color={theme.colors.attention} size={24} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;
