import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

const SkillCard = ({children, key}) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} key={key}>
      <Text style={styles.textSkills}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
