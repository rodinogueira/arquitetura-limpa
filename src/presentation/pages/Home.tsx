// src/presentation/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import { TaskList } from '../components/TaskList';
// import { makeUpdateTask } from '../../main/factories/makeUpdateTask';
import { Task } from '../../domain/entities/Task';

export interface HomeProps {
  loadMakeGetTasks: { execute: () => Promise<Task[]> };
}

export const Home: React.FC<HomeProps> = ({ loadMakeGetTasks }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
//   const updateTaskUseCase = makeUpdateTask();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await loadMakeGetTasks.execute(); 
        setTasks(tasks);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleToggleDone = async (id: string) => {
    try {
      const task = tasks.find(t => t.id === id);
      if (task) {
        // await updateTaskUseCase.execute(id, { done: !task.done });
        setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
      }
    } catch (error) {
      console.error('Failed to toggle task done state:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Todo List</h1>
      <TaskList tasks={tasks} onToggleDone={handleToggleDone} />
    </div>
  );
};
