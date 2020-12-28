import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';
import { User } from '../login/login.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  id!: number;
  customer!: Customer;
  customerData: Customer;
  myForm: any;
  fb: any;
  group: any;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private customerService: CustomerService ,private formBuilder: FormBuilder) { 
      this.customerData = JSON.parse(localStorage.getItem('customerData')||'{}')
    }

    

  ngOnInit(): void {
    this.customer= new Customer();
  
    

 
this.customerService.getCustomer(this.id)
  .subscribe(data => {
    console.log(data)
    this.customer = data;
  }, error => console.log(error));
  }
  
  changePassword() {
    this.customerService.changePassword(this.customerData.id, this.customer)
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));
      this.customer= new Customer();
    this.gotoList();
    
    }
    onSubmit() {
      this.changePassword();
      }
      
      gotoList() {
      this.router.navigate(['']);
      alert("Password has been changed.")
      
      }
      // password(formGroup: FormGroup) {
      //   const { value: password } = formGroup.get('password');
      //   const { value: confirmPassword } = formGroup.get('confirmpassword');
      //   return password === confirmPassword ? null : { passwordNotMatch: true };
      // }
      
  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  
}
