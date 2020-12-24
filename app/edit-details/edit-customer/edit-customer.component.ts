import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  id!: number;
  customer!:Customer;
  constructor( private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customer= new Customer();
  

// tslint:disable-next-line:no-string-literal
this.id = this.route.snapshot.params['id'];
this.customerService.getCustomer(this.id)
  .subscribe(data => {
    console.log(data)
    this.customer = data;
  }, error => console.log(error));
}

updateCustomer() {
this.customerService.updateCustomer(this.id, this.customer)
  .subscribe(data => console.log(data), error => console.log(error));
  this.customer= new Customer();
this.gotoList();

}

onSubmit() {
this.updateCustomer();
}

gotoList() {
this.router.navigate(['/customer']);

}
email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}

}