import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Customer } from 'src/app/customer-table';
import { AuthorizationService } from "src/app/authorization.service";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { AlertService } from 'src/app/alert.service';
import { first } from 'rxjs/operators';
import { CustomerService } from 'src/app/customer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    logindetails: User = new User();
    customer!: Object;
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl!: string;
  customerData: any;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private customerService: CustomerService ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        }
        );
        
        // this.customers = this.customerService.getCustomersList();
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        
        
        // this.authenticationService.login(this.logindetails)
        // .subscribe(data => console.log(data),error =>console.log(error));
        // this.logindetails = new User();
        

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        
        this.logindetails.email= this.f.email.value;
        this.logindetails.password= this.f.password.value;

        // for( var customer in this.customers){
          
        // }

        console.log(this.logindetails);

        this.loading = true;

        this.authenticationService.login(this.logindetails)
            .pipe(first())
            .subscribe(
                data =>  {console.log(data)
                     this.customer = data;
                     localStorage.setItem('customerData', JSON.stringify(data));
                     this.customerData = JSON.parse(localStorage.getItem('customerData')|| '{}')
                     if(this.customerData.id == null)
                     {this.authenticationService.logout();
                      alert("Incorrect email or password");  
                    }
                     else
                    this.router.navigate([this.returnUrl]);
                }
                ,
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                // this.f = new User();
  }

  hide = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}

export class User {
  email:string = "";
  password:string = "";
}













// logindetails: LoginDetails = new LoginDetails();

// submitted = false;

// constructor(private loginservice: AuthorizationService,
//   private router: Router) { }


  // login(){
  //   this.loginservice.login(this.logindetails)
  //   .subscribe(data => console.log(data),error =>console.log(error));
  //   this.logindetails = new LoginDetails();
    
  //   this.gotoList();
  // }

//   onSubmit(){
//     this.submitted=true;
//     this.login();
//   }

//   gotoList(){
//     this.router.navigate(['/user-home']);
//     console.log(this.logindetails);
//   }