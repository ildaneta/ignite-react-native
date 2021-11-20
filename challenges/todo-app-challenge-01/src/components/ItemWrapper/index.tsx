import React, { ReactNode } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { styles } from './styles';

interface ItemWrapperProps {
  index: number;
  children: ReactNode;
}

export function ItemWrapper({ index, children }: ItemWrapperProps) {
  if (index % 2 === 0)
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['rgba(196, 196, 196, 0)', 'rgba(196, 196, 196, 0.24)']}
        style={styles.container}
      >
        {children}
      </LinearGradient>
    );

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </View>
  );
}
