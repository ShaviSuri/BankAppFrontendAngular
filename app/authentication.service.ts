import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/bank/v1/';



  // login(login: Object): Observable<Object> {
  //   return this.http.post(this.baseUrl+'login', login);
  // }

  login(login: Object): Observable<Object> {
      return this.http.post<any>(this.baseUrl+'login', login)
          .pipe(map(user => {
              // login successful if there's a jwt token in the response
              if (user) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }
              return user;
          }));
  }
  

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      localStorage.removeItem('customerData');
  }


}






// login(email: string, password: string) {
//   return this.http.post<any>(`/users/authenticate`, { email: email, password: password })
//       .pipe(map(user => {
//           // login successful if there's a jwt token in the response
//           if (user && user.token) {
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('currentUser', JSON.stringify(user));
//           }

//           return user;
//       }));
// }