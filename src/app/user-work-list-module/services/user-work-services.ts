import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserWorkServices {
  constructor(private http: HttpClient) {}
  private api: string = 'https://jsonplaceholder.typicode.com/todos';

  getAllTodo() {
    return this.http.get(this.api);
  }
  getTodoById(id: number | string) {
    return this.http.get(`${this.api}/${id}`);
  }
}
