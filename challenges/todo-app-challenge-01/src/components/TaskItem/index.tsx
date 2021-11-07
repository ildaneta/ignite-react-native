import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import trashIcon from '../../assets/icons/trash/trash.png';
import { IEditTaskProps } from '../../pages/Home';

import { styles } from './styles';

export interface ITask {
  id: number;
  title: string;
  done: boolean;
}

interface ITaskItem {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  };
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask?: ({ taskId, taskNewTitle }: IEditTaskProps) => void;
  index: number;
}

const TaskItem = ({
  tasks,
  toggleTaskDone,
  removeTask,
  editTask,
  index,
}: ITaskItem): JSX.Element => {
  const [isTaskBeingEdited, setTaskBeingEdited] = useState(false);
  const [valueEditedTask, setValueEditedTask] = useState();

  return (
    <>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone}
        >
          <View
            testID={`marker-${index}`}
            style={
              tasks.done === true ? styles.taskMarkerDone : styles.taskMarker
            }
          >
            {tasks.done && <Icon name="check" size={12} color="#FFF" />}
          </View>

          <Text
            style={tasks.done === true ? styles.taskTextDone : styles.taskText}
          >
            {tasks.title}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        testID={`trash-${index}`}
        style={{ paddingRight: 20 }}
        onPress={() => removeTask(tasks.id)}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </>
  );
};

export default TaskItem;
