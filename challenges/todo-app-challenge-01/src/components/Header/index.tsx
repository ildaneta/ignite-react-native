import React from 'react';
import { View, Text, Image } from 'react-native';

import logoImg from '../../assets/images/logo/logo.png';

import { styles } from './styles';

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  let tasksCounterText;

  if (tasksCounter > 1) {
    tasksCounterText = 'tasks';
  } else if (tasksCounter == 0 || tasksCounter == 1) {
    tasksCounterText = 'task';
  }

  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>You have </Text>
        <Text style={styles.tasksCounterBold}>
          {tasksCounter} {tasksCounterText}
        </Text>
      </View>
    </View>
  );
}
