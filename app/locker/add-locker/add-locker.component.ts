import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-locker',
  templateUrl: './add-locker.component.html',
  styleUrls: ['./add-locker.component.css']
})
export class AddLockerComponent implements OnInit {
  
  value1 = 'Locker Number'; 
  value2 = 'Account Number'; 
  value3 = 'In-Time'; 
  value4 = 'Out-Time'; 
  value5 = 'Branch Code'; 
  value6 = 'Availability'; 
  
  constructor() { }

  ngOnInit(): void {
  }
  

  // detailsShow(): void {
  //   alert(JSON.stringify(this.show));
  // }


}
