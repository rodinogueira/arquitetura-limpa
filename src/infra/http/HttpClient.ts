// src/infra/http/HttpClient.ts
export interface HttpRequest {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    body?: any;
  }
  
  export interface HttpResponse<R = any> {
    statusCode: number;
    body: R;
  }
  
  export interface HttpClient {
    request<R>(data: HttpRequest): Promise<HttpResponse<R>>;
  }
  