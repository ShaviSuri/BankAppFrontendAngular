import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from "./authorization/change-password/change-password.component";
import { LoginComponent } from "./authorization/login/login.component";
import { AddCustomerComponent } from "./add-details/add-customer/add-customer.component";
import { AddAccountComponent } from "./add-details/add-account/add-account.component";
import { AddLockerComponent } from "./locker/add-locker/add-locker.component";
import { DetailsLockerComponent } from "./locker/details-locker/details-locker.component";
import { AccountComponent } from "./view-details/account/account.component";
import { CustomerComponent } from "./view-details/customer/customer.component";
import { MiniStatementComponent } from "./view-details/mini-statement/mini-statement.component";
import { WithdrawDepositComponent } from './admin-transaction/withdraw-deposit/withdraw-deposit.component';
import { FundTransferComponent } from "./transaction/fund-transfer/fund-transfer.component";
import { EditCustomerComponent } from './edit-details/edit-customer/edit-customer.component';
import { AdminDepositComponent } from './admin-transaction/admin-deposit/admin-deposit.component';
import { AdminWithdrawComponent } from './admin-transaction/admin-withdraw/admin-withdraw.component';
import { AdminFundTransferComponent } from './admin-transaction/admin-fund-transfer/admin-fund-transfer.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"#", component:LoginComponent},
  {path:"index.html", component:LoginComponent},
  {path:"change-password",component:ChangePasswordComponent},
  {path:"customer-account",component:AddCustomerComponent},
  {path:"account",component:AddAccountComponent},
  {path:"add-locker",component:AddLockerComponent},
  {path:"locker",component:DetailsLockerComponent},
  {path:"statement",component:MiniStatementComponent},
  {path:"view-accounts",component:AccountComponent},
  {path:"customer",component:CustomerComponent},
  {path:"deposit-withdraw",component:WithdrawDepositComponent},
  {path:"fund-transfer",component:FundTransferComponent},
  {path: 'update/:id', component:EditCustomerComponent },
  { path:"deposit", component:AdminDepositComponent},
  { path:'withdraw/:id', component:AdminWithdrawComponent },
  { path:'fundtransfer/:id', component:AdminFundTransferComponent },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
