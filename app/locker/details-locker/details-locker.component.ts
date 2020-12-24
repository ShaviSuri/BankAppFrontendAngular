import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Locker } from 'src/app/locker';

const ELEMENT_DATA: Locker[] = [

  { lockerNo: 22, accountNo:'5634628917537', inTime: '12:40 pm',outTime: '1:20pm', branchCode: '456yxt',availability:'Available'},
  { lockerNo: 24, accountNo:'56346246787', inTime: '1:40 pm',outTime: '2:23pm', branchCode: '456yxt',availability:'Available'},
  { lockerNo: 25, accountNo:'6474628917537', inTime: '12:40 pm',outTime: '4:20pm', branchCode: '456yxt',availability:'Available'},
  { lockerNo: 26, accountNo:'8934628917537', inTime: '3::40 pm',outTime: '4:20pm', branchCode: '456yxt',availability:'UnAvailable'},
  { lockerNo: 27, accountNo:'38734628917537', inTime: '12:40 pm',outTime: '1:20pm', branchCode: '456yxt',availability:'UnAvailable'},
 {lockerNo: 29, accountNo:'5467628917537', inTime: '12:40 pm',outTime: '1:30pm', branchCode: '456yxt',availability:'UnAvailable'},
 

];
@Component({
  selector: 'app-details-locker',
  templateUrl: './details-locker.component.html',
  styleUrls: ['./details-locker.component.css']
})
export class DetailsLockerComponent  {

  displayedColumns: string[] = ['lockerNo','accountNo','inTime','outTime','branchCode','availability'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
