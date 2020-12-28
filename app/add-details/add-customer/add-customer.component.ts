import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  submitted = false;
  User!: string;
  newDate: any;
  form!: FormGroup
  
  
  

  constructor(private customerService: CustomerService,
    private router: Router,public datepipe: DatePipe,private formBuilder: FormBuilder) { }

  convertDate(){
    
  }

  ngOnInit(){
    this.customer.role= "customer";
    console.log(this.customer.account);

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });

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
    console.log(this.customer.dob);
  }

  onSubmit(){
    this.customer.dob =this.datepipe.transform(this.customer.dob, 'yyyy-MM-dd') as any;
    console.log(this.customer.dob);
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
