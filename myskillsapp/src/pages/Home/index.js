import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

import Button from '../../components/Button/index';
import SkillCard from '../../components/SkillCard/index';
import {styles} from './styles';

const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [allSkills, setAllSkills] = useState([]);

  function handleAddNewSkill() {
    setAllSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  function handleInputChange(skill) {
    setNewSkill(skill);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Ilda!</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#666"
        onChangeText={text => handleInputChange(text)}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 40}]}>My Skills: </Text>

      <FlatList
        data={allSkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard>{item}</SkillCard>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
