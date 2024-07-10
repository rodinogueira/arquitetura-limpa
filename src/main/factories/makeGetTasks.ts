// src/main/factories/makeGetTasks.ts
import { TaskRepositoryImpl } from '../../infra/repositories/TaskRepositoryImpl';
import { GetTasks } from '../../application/useCases/GetTasks';
import { httpClientFactory } from '../../infra/http/httpClientFactory';

export const makeGetTasks = () => {
  const httpClient = httpClientFactory();
  const taskRepository = new TaskRepositoryImpl(httpClient);
  return new GetTasks(taskRepository);
};
