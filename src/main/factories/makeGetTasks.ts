// src/main/factories/makeGetTasks.ts
import { TaskRepositoryImpl } from '../../infra/repositories/TaskRepositoryImpl';
import { GetTasksOutputBoundary } from '../../application/useCases/boundaries/GetTasksOutputBoundary'; 
import { httpClientFactory } from '../../infra/http/httpClientFactory';
import { Task } from '../../domain/entities/Task';

export const makeGetTasks = () => {
  const httpClient = httpClientFactory();
  const taskRepository = new TaskRepositoryImpl(httpClient);
  
  const outputBoundary: GetTasksOutputBoundary = {
    presentSuccess: (tasks: Task[]) => {
      console.log('Tasks retrieved successfully:', tasks);
    },
    presentError: (error: Error) => {
      console.error('Failed to retrieve tasks:', error);
    },
  };

  const execute = async (): Promise<Task[]> => {
    try {
      const tasks = await taskRepository.getTasks();
      outputBoundary.presentSuccess(tasks); // Chama o outputBoundary
      return tasks;
    } catch (error) {
      if (error instanceof Error) {
        outputBoundary.presentError(error);
      } else {
        outputBoundary.presentError(new Error('Unknown error occurred'));
      }
      throw error;
    }
  };

  return { execute }; // Retorna o objeto com o método execute
};
