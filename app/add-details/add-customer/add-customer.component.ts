import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  submitted = false;
  
  
  

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(){
    console.log(this.customer.account);
  }

  newCustomer(): void{
    this.submitted = false;
    this.customer =  new Customer();
  }

  save(){
    this.customerService.createCustomer(this.customer)
    .subscribe(data => console.log(data),error =>console.log(error));
    this.customer = new Customer();
    this.gotoList();
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/customer']);
    console.log(this.customer);
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
