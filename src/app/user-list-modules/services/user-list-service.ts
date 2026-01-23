import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from '../types/user.type';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsersList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getUsersPaginated(page: number, limit: number): Observable<any> {
    const params = new HttpParams().set('_page', page.toString()).set('_limit', limit.toString());
    return this.http.get<UserType[]>(this.apiUrl, { params, observe: 'response' }).pipe(
      map((response) => {
        return {
          data: response.body,
          total: Number(response.headers.get('x-total-count')) || 0,
        };
      }),
    );
  }
}
