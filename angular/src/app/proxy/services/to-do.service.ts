import type { TodoItemDto } from './dtos/models';
import { RestService, Rest } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  apiName = 'Default';
  

  create = (text: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, TodoItemDto>({
      method: 'POST',
      url: '/api/app/to-do',
      params: { text },
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/to-do/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (config?: Partial<Rest.Config>) =>
    this.restService.request<any, TodoItemDto[]>({
      method: 'GET',
      url: '/api/app/to-do',
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
