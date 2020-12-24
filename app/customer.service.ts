import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8080/spring/bank/v1/customer';


  constructor(private http: HttpClient) {​​ }​​
  getCustomersList(): Observable<any> {​​
    return this.http.get(​​this.baseUrl​);
  }​​

  getCustomer(id: number): Observable<any> {
    return this.http.get(this.baseUrl+'/'+id);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(this.baseUrl, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(this.baseUrl+'/'+id, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'/'+id, { responseType: 'text' });
  }
}
