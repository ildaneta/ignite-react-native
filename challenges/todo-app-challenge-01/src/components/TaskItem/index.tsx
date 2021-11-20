import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import trashIcon from '../../assets/icons/trash/trash.png';
import dividerIcon from '../../assets/icons/divider.png';

import { IEditTaskProps } from '../../pages/Home/Home';

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
  const [valueEditedTask, setValueEditedTask] = useState(tasks.title);
  const textInputRef = useRef<TextInput>(null);

  const handleStartEditing = () => {
    setTaskBeingEdited(true);
  };

  const handleCancelEdit = () => {
    setValueEditedTask(tasks.title);
    setTaskBeingEdited(false);
  };

  const handleSubmitEditing = () => {
    editTask({ taskId: tasks.id, taskNewTitle: valueEditedTask });
    setTaskBeingEdited(false);
  };

  useEffect(() => {
    if (textInputRef.current) {
      if (isTaskBeingEdited) {
        textInputRef.current.focus();
      } else {
        textInputRef.current.blur();
      }
    }
  }, [isTaskBeingEdited]);

  return (
    <>
      <View>
        <TouchableOpacity
          testID={`button-${index}`}
          activeOpacity={0.7}
          style={styles.taskButton}
          onPress={() => toggleTaskDone(tasks.id)}
        >
          <View
            testID={`marker-${index}`}
            style={
              tasks.done === true ? styles.taskMarkerDone : styles.taskMarker
            }
          >
            {tasks.done && <Icon name="check" size={12} color="#FFF" />}
          </View>

          <TextInput
            ref={textInputRef}
            value={valueEditedTask}
            onChangeText={setValueEditedTask}
            editable={isTaskBeingEdited}
            onSubmitEditing={handleSubmitEditing}
            style={tasks.done === true ? styles.taskTextDone : styles.taskText}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerItems}>
        {isTaskBeingEdited ? (
          <TouchableOpacity
            onPress={handleCancelEdit}
            style={{ paddingRight: 10 }}
          >
            <Icon name="x" size={24} color={'#cecece'} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            testID={`trash-${index}`}
            style={{ paddingRight: 10 }}
            onPress={handleStartEditing}
          >
            <Icon name="edit-3" size={22} color={'#999'} />
          </TouchableOpacity>
        )}
        <Image
          source={dividerIcon}
          style={{ opacity: isTaskBeingEdited ? 0.2 : 1 }}
        />

        <TouchableOpacity
          testID={`trash-${index}`}
          style={{ paddingLeft: 10, opacity: isTaskBeingEdited ? 0.2 : 1 }}
          onPress={() => removeTask(tasks.id)}
          disabled={isTaskBeingEdited}
        >
          <Image source={trashIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TaskItem;
