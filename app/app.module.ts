import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authorization/login/login.component';
import { ChangePasswordComponent } from './authorization/change-password/change-password.component';
import { AddCustomerComponent } from './add-details/add-customer/add-customer.component';
import { AddAccountComponent } from './add-details/add-account/add-account.component';
import { AddLockerComponent } from "./locker/add-locker/add-locker.component";
import { DetailsLockerComponent } from "./locker/details-locker/details-locker.component";
import { AccountComponent } from "./view-details/account/account.component";
import { CustomerComponent } from "./view-details/customer/customer.component";
import { MiniStatementComponent } from "./view-details/mini-statement/mini-statement.component";
import { FundTransferComponent } from './transaction/fund-transfer/fund-transfer.component';
import { WithdrawDepositComponent } from './admin-transaction/withdraw-deposit/withdraw-deposit.component';
import { CustomerService } from "./customer.service";
import { FilterPipePipe } from './filter-pipe.pipe';
import { EditCustomerComponent } from './edit-details/edit-customer/edit-customer.component';
import { AdminWithdrawComponent } from './admin-transaction/admin-withdraw/admin-withdraw.component';
import { AdminDepositComponent } from './admin-transaction/admin-deposit/admin-deposit.component';
import { AdminFundTransferComponent } from './admin-transaction/admin-fund-transfer/admin-fund-transfer.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ChangePasswordComponent,
    AddCustomerComponent,
    AddAccountComponent,
    AddLockerComponent,
    DetailsLockerComponent,
    AccountComponent,
    CustomerComponent,
    MiniStatementComponent,
    FundTransferComponent,
    WithdrawDepositComponent,
    FilterPipePipe,
    EditCustomerComponent,
    AdminWithdrawComponent,
    AdminDepositComponent,
    AdminFundTransferComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,


    
  ],
  providers: [CustomerService,FilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
