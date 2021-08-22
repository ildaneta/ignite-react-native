import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import {styles} from './styles';

interface ISkillCardProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

const SkillCard = ({children, ...rest}: ISkillCardProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
      <Text style={styles.textSkills}>{children}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
