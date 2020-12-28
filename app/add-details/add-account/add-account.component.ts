import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/account-table';
import { AdmintransactionService } from 'src/app/admintransaction.service';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  element1:Customer = new Customer();
  element2:Account = new Account();
  
  id!: number;


  constructor( private route: ActivatedRoute,private router: Router,
   private customerService: CustomerService) {}

    ngOnInit(): void {
   
      this.element1= new Customer();
  this.id = this.route.snapshot.params['id'];
  this.customerService.getCustomer(this.id)
    .subscribe(data => {
     
      this.element1 = data;
      
    }, error => console.log(error));
  }
  addAccount() {
    // this.element2= new Account();
    // (this.element2.acc_type,this.element2.branchName,this.element2.balance,this.element2.branchCode)

    this.customerService.addAccount(this.element1.id,this.element2)
      .subscribe(data => console.log(data), error => console.log(error));
      this.element2= new Account();
      this.router.navigate(['/deposit-withdraw']);
      

    }
    
    onSubmit() {
    this.addAccount();
    }

}
