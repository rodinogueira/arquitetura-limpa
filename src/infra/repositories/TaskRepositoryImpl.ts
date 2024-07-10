// src/infra/repositories/TaskRepositoryImpl.ts
import { Task } from '../../domain/entities/Task';
import { TaskRepository } from '../../domain/repositories/TaskRepository';
import { HttpClient } from '../http/HttpClient';

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getTasks(): Promise<Task[]> {
    const httpResponse = await this.httpClient.request<Task[]>({
      url: '/todos',
      method: 'get',
    });

    return httpResponse.body;
  }
}
