import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './authorization/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
      return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
      return this.http.get(`/users/` + id);
  }

  register(user: User) {
      return this.http.post(`/users/register`, user);
  }

  delete(id: number) {
      return this.http.delete(`/users/` + id);
  }
}
