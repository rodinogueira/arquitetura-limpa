// src/infra/http/httpClientFactory.ts
import { AxiosHttpClientAdapter } from './AxiosHttpClientAdapter';

export const httpClientFactory = () => {
  return new AxiosHttpClientAdapter();
};
