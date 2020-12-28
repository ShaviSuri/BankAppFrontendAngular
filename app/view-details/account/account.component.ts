import { Component, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/account-table';
import { AccountService } from 'src/app/account.service';

const ELEMENT_DATA: Account[] = [
  // {custId:1, accountNo:'12345667', accountType:'Current',balance:100.007, branchName:'Delhi', branchCode:'D01',transaction:['1','2']},
  // {custId:2,accountNo:'2345667', accountType:'Saving',balance:100.00, branchName:'Delhi', branchCode:'D01',transaction:['1','2']},
  // {custId:3,accountNo:'124567667', accountType:'Current',balance:100.500, branchName:'Mumbai', branchCode:'M02',transaction:['1','2']},
  // {custId:4,accountNo:'357827', accountType:'Current',balance:100.78, branchName:'Dehradun', branchCode:'D03',transaction:['1','2']},
  ];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent  {

  accounts!: Observable<Account[]>;

  constructor(private accountservice: AccountService, private router: Router) {this.accountservice.getAccountsList().subscribe ( allaccount => {
    this.dataSource.data = allaccount;
  })}

   displayedColumns: string[] = ['id','acc_no','acc_type','balance', 'branchName','branchCode','actions'];
   dataSource  = new MatTableDataSource<Account[]>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  reloadData() {​​
    this.accounts = this.accountservice.getAccountsList();
    location.reload();
  }​​

  deleteAccount(id: number) {
    var r = confirm("Do you want to delete this account?");
    if (r == true) {
    this.accountservice.deleteAccount(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
      }
      else
      this.reloadData();
  }


  // updateAccount(id: number){
  //   this.router.navigate(['update', id]);
  // }

}

