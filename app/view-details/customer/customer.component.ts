import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from 'src/app/customer-table';
import { CustomerService } from 'src/app/customer.service';



// const ELEMENT_DATA: customer[] = [
  
//   ];

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

 customers!: Observable<Customer[]>;


  // allCustomers:any =[];

  // ngOnInit() {​​
  //   this.reloadData();
  // }​​

  
  constructor(private customerService: CustomerService, private router: Router) {this.customerService.getCustomersList().subscribe ( allcustomer => {
    this.dataSource.data = allcustomer;
  })}

  displayedColumns: string[] = ['id','fullName','dob','email','mobile','aadharNo','address','locker','actions'];
  dataSource  = new MatTableDataSource<Customer[]>();


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadData() {​​
    this.customers = this.customerService.getCustomersList();
    location.reload();
  }​​

  deleteCustomer(id: number) {
    var r = confirm("Do you want to delete this customer?");
    if (r == true) {
    this.customerService.deleteCustomer(id)
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


  updateCustomer(id: number){
    this.router.navigate(['update', id]);
  }

}

