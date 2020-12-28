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
import { UserHomeComponent } from "./view-details/user-home/user-home.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
 {path:"", component:UserHomeComponent, canActivate: [AuthGuard]},
 {path:"user-home", component:UserHomeComponent, canActivate: [AuthGuard]},
  // {path:"#", component:LoginComponent},
  // { path: '**', redirectTo: '' },
  {path:"login", component:LoginComponent},
  {path:"change-password",component:ChangePasswordComponent, canActivate: [AuthGuard]},
  {path:"customer-account",component:AddCustomerComponent, canActivate: [AuthGuard]},
  {path:"account",component:AddAccountComponent , canActivate: [AuthGuard]},
  {path:"add-locker",component:AddLockerComponent, canActivate: [AuthGuard]},
  {path:"locker",component:DetailsLockerComponent , canActivate: [AuthGuard]},
  {path:"addAccount/:id",component:AddAccountComponent, canActivate: [AuthGuard]},//add
  {path:"statement",component:MiniStatementComponent, canActivate: [AuthGuard]},
  {path:"view-accounts",component:AccountComponent, canActivate: [AuthGuard]},
  {path:"customer",component:CustomerComponent, canActivate: [AuthGuard]},
  {path:"deposit-withdraw",component:WithdrawDepositComponent, canActivate: [AuthGuard]},
  {path:"fund-transfer",component:FundTransferComponent, canActivate: [AuthGuard]},
  {path: 'update/:id', component:EditCustomerComponent , canActivate: [AuthGuard]},
  { path:"deposit/:id", component:AdminDepositComponent, canActivate: [AuthGuard]},
  { path:'withdraw/:id', component:AdminWithdrawComponent , canActivate: [AuthGuard]},
  { path:'userFundtransfer/:id', component:FundTransferComponent , canActivate: [AuthGuard]},
  { path:'fundtransfer/:id', component:AdminFundTransferComponent , canActivate: [AuthGuard]},
  { path:"user-home", component:UserHomeComponent, canActivate: [AuthGuard]},




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routing = RouterModule.forRoot(routes);