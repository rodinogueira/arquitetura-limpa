// src/presentation/components/TaskList.tsx
import React from 'react';
import { Task } from '../../domain/entities/Task';

interface TaskListProps {
  tasks: Task[];
  onToggleDone: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleDone }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <span
            className={`task-title ${task.done ? 'done' : ''}`}
            onClick={() => onToggleDone(task.id)}
          >
            {task.title}
          </span>
        </div>
      ))}
    </div>
  );
};
