import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { ItemWrapper } from '../ItemWrapper/index';

import { styles } from './styles';

import trashIcon from '../../assets/icons/trash/trash.png';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View
                  testID={`marker-${index}`}
                  style={
                    item.done === true
                      ? styles.taskMarkerDone
                      : styles.taskMarker
                  }
                >
                  {item.done && <Icon name="check" size={12} color="#FFF" />}
                </View>

                <Text
                  style={
                    item.done === true ? styles.taskTextDone : styles.taskText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingRight: 20 }}
              onPress={() => removeTask(item.id)}
            >
              <Image source={trashIcon} />
            </TouchableOpacity>
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
}
