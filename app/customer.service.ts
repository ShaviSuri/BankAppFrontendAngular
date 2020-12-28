import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/bank/v1';


  constructor(private http: HttpClient) {​​ }​​
  getCustomersList(): Observable<any> {​​
    return this.http.get(​​this.baseUrl​+'/customer');
  }​​

  getCustomer(id: number): Observable<any> {
    return this.http.get(this.baseUrl+'/customer/'+id);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/customer', customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+'/customer/'+id, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/customer/'+id, { responseType: 'text' });
  }
  addAccount(id: number, account: Object): Observable<Object> {
    return this.http.post(this.baseUrl+'/addAccount/'+id, account);
  }

  changePassword(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+'/cust/'+id, value);
  }
}
