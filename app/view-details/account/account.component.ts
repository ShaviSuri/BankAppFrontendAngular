import { Component, } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Account } from 'src/app/account-table';

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

   displayedColumns: string[] = ['custId','accountNo','accountType','balance', 'branchName','branchCode','actions'];
   dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

