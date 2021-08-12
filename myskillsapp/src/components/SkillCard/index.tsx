import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

interface ISkillCardProps {
  children: React.ReactNode;
}

const SkillCard = ({children}: ISkillCardProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkills}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
