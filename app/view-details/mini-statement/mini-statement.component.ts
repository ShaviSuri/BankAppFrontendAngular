import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MiniStatement } from 'src/app/mini-statement';


 const ELEMENT_DATA: MiniStatement[] = [

  {  transactionId:1,transferAccountNo:568, accountNo:234,transferType:'NetBanking', dateTime:'26/12/2020 11:34 am',ifsc:4567890,amount:12345},
  {  transactionId:2,transferAccountNo:876, accountNo:234,transferType:'Cheque', dateTime:'26/12/2020 11:34 am',ifsc:4567890,amount:1},
  {  transactionId:3,transferAccountNo:879, accountNo:234,transferType:'NetBanking', dateTime:'26/12/2020 11:34 am',ifsc:4567890,amount:2345},
  {  transactionId:4,transferAccountNo:345, accountNo:234,transferType:'NetBanking', dateTime:'26/12/2020 11:34 am',ifsc:4567890,amount:6745},
  {  transactionId:5,transferAccountNo:456, accountNo:234,transferType:'NetBanking', dateTime:'26/12/2020 11:34 am',ifsc:4567890,amount:98345}
];

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent {

  displayedColumns: string[] = ['transactionId','transferAccountNo','accountNo','transferType','dateTime','ifsc','amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

