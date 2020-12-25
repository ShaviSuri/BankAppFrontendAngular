import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/account-table';

const ELEMENT_DATA: Account[] = [
  {id:1,acc_no:'12345667',acc_type:'Current',balance:100.007, branchName:'Delhi', branchCode:'D01',transaction:[]},

  ];

@Component({
  selector: 'app-withdraw-deposit',
  templateUrl: './withdraw-deposit.component.html',
  styleUrls: ['./withdraw-deposit.component.css']
})
export class WithdrawDepositComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  deposit(){ 
    this.router.navigate(['/deposit']);
  }
  withdraw(id:number){ 
    this.router.navigate(['withdraw',id]);
  }
  fundTransfer(id:number){ 
    this.router.navigate(['fundtransfer',id]);
  }

  displayedColumns: string[] = ['id','acc_no','acc_type','balance','branchName','branchCode','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
