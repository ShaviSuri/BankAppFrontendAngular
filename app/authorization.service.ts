import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private baseUrl = 'http://localhost:8080/bank/v1/';


  constructor(private http: HttpClient) {​​ }​​

  login(login: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'login', login);
  }

}
