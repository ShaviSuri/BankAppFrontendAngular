import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account-table';
import { Router } from '@angular/router';
import { AdmintransactionService } from 'src/app/admintransaction.service';

// const ELEMENT_DATA: Account[] = [
//   {id:1,acc_no:'12345667',acc_type:'Current',balance:100.007, branchName:'Delhi', branchCode:'D01',transaction:[]},

//   ];

@Component({
  selector: 'app-withdraw-deposit',
  templateUrl: './withdraw-deposit.component.html',
  styleUrls: ['./withdraw-deposit.component.css']
})
export class WithdrawDepositComponent {
  
  accounts!: Observable<Account[]>;

  constructor(private admintransactionService: AdmintransactionService, private router: Router)
   {this.admintransactionService.getAccountsList().subscribe 
    ( 
      allaccounts => { this.dataSource.data = allaccounts;}
      )
    }
    displayedColumns: string[] = ['id','acc_no','acc_type','balance','branchName','branchCode','actions'];
    dataSource = new MatTableDataSource<Account[]>();

    reloadData() {​​
      this.accounts = this.admintransactionService.getAccountsList();
      location.reload();
    }​​

  deposit(id:number){ 
    this.router.navigate(['/deposit',id]);
  }
  fundTransfer(id:number){ 
    this.router.navigate(['fundtransfer',id]);
  }



  withdraw(id:number){ 
    this.router.navigate(['withdraw',id]);
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
