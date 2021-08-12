import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';

import Button from '../../components/Button/index';
import SkillCard from '../../components/SkillCard/index';
import {styles} from './styles';

const Home = (): JSX.Element => {
  const [newSkill, setNewSkill] = useState('');
  const [allSkills, setAllSkills] = useState([]);
  const [greetting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setAllSkills(oldState => [...oldState, newSkill]);
    setNewSkill('');
  }

  function handleInputChange(skill: string) {
    setNewSkill(skill);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning!');
    } else if (currentHour > 12 && currentHour < 18) {
      setGreeting('Good afternoon!');
    } else {
      setGreeting('Good evening!');
    }
  }, [greetting]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Ilda! </Text>
      <Text style={styles.greeting}>{greetting}</Text>

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
