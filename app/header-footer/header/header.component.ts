import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer-table';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  customerData: Customer;
  
  constructor() { 
    this.customerData = JSON.parse(localStorage.getItem('customerData')|| '{}')
  }
  

  ngOnInit(): void {
    
  }

}
