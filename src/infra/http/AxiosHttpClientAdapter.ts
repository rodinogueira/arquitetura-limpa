// src/infra/http/AxiosHttpClientAdapter.ts
import { axiosInstance } from '../axiosInstance';
import { HttpClient, HttpRequest, HttpResponse } from './HttpClient';

export class AxiosHttpClientAdapter implements HttpClient {
  async request<R>(data: HttpRequest): Promise<HttpResponse<R>> {
    const { url, method, body } = data;
    const axiosResponse = await axiosInstance.request({
      url,
      method,
      data: body,
    });

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    };
  }
}
