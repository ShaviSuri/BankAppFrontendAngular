import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/account-table';
import { AdmintransactionService } from 'src/app/admintransaction.service';

@Component({
  selector: 'app-admin-fund-transfer',
  templateUrl: './admin-fund-transfer.component.html',
  styleUrls: ['./admin-fund-transfer.component.css']
})
export class AdminFundTransferComponent implements OnInit {

  element:Account = new Account();
  element1:Account = new Account();
  id!: number;
 
  constructor( private route: ActivatedRoute,private router: Router,
    private admintransactionService: AdmintransactionService) {}

  ngOnInit(): void {


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
  fundTransfer(){
    // this.element= new Account();
    // this.element1=this.element

    this.admintransactionService.fundTransfer(this.element1) 
    .subscribe(data => console.log(data),error =>console.log(error));
    this.element1 = new Account();
    this.router.navigate(['/deposit-withdraw']);
    console.log(this.element1);
  }

  onSubmit() {
    this.fundTransfer(); 
    }
  
    

}