import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdmintransactionService {
  private baseUrl = 'http://localhost:8080/bank/v1';


  constructor(private http: HttpClient) {​​ }​​

  getAccountsList(): Observable<any> {​​
    return this.http.get(​​this.baseUrl ​+'/account/');
  }​​

  getAccount(id: number): Observable<any> {
    return this.http.get(this.baseUrl +'/account/'+ id);
  }
  // withdraw(): Observable<any> {
  //     return this.http.get(this.baseUrl +'/withdraw/');
    //}

    withdraw(account: Object): Observable<Object> {
      return this.http.post(this.baseUrl +'/withdraw',account);
    }

    deposit(account: Object): Observable<Object> {
      return this.http.post(this.baseUrl +'/deposit',account);
    }
    
    fundTransfer(account: Object): Observable<Object> {
      return this.http.post(this.baseUrl +'/transaction',account);
    }
}
