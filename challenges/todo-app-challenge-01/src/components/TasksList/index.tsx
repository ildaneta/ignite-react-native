import React from 'react';
import { FlatList } from 'react-native';
import { IEditTaskProps } from '../../pages/Home/Home';
import { styles } from './styles';

import { ItemWrapper } from '../ItemWrapper/index';
import TaskItem from '../TaskItem';

export interface ITask {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  tasks: ITask[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: IEditTaskProps) => void;
}

export function TasksList({
  tasks,
  toggleTaskDone,
  removeTask,
  editTask,
}: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem
              index={index}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
              editTask={editTask}
              tasks={item}
            />
          </ItemWrapper>
        );
      }}
      style={styles.flatList}
    />
  );
}
