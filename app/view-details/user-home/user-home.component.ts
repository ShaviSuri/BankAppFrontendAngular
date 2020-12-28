import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AdmintransactionService } from 'src/app/admintransaction.service';
import { User } from 'src/app/authorization/login/login.component';
import { Customer } from 'src/app/customer-table';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

    currentUser: User;
    customerData: Customer;
    users: User[] = [];

    constructor(private admintransactionService: AdmintransactionService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')|| '{}');
        this.customerData = JSON.parse(localStorage.getItem('customerData')|| '{}')
        


    }

    userFundTransfer(id:number){ 
      this.router.navigate(['userFundtransfer',id]);
    }

    ngOnInit() {
      
    }

}
