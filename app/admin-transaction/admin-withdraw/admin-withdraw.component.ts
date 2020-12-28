import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/account-table';
import { AdmintransactionService } from 'src/app/admintransaction.service';

@Component({
  selector: 'app-admin-withdraw',
  templateUrl: './admin-withdraw.component.html',
  styleUrls: ['./admin-withdraw.component.css']
})
export class AdminWithdrawComponent implements OnInit {
  element:Account = new Account();
  element1:Account = new Account();
  id!: number;
 
  constructor( private route: ActivatedRoute,private router: Router,
    private admintransactionService: AdmintransactionService) {}

  ngOnInit(): void {

    // this.element= new Account();

    this.id = this.route.snapshot.params['id'];
this.admintransactionService.getAccount(this.id)
  .subscribe(data => {
    console.log(data)
    this.element = data;
    this.element1.id = this.element.id;
    this.element1.acc_no = this.element.acc_no;
    this.element1.balance = this.element.balance;
    // this.element1=data;
  }, error => console.log(error));
  
}
  withdraw(){
    // this.element= new Account();
    // this.element1=this.element

    this.admintransactionService.withdraw(this.element1) 
    .subscribe(data => console.log(data),error =>console.log(error));
    this.element1 = new Account();
    this.router.navigate(['/deposit-withdraw']);
    console.log(this.element1);
  }

  onSubmit() {
    this.withdraw(); 
    }
  
    
}

