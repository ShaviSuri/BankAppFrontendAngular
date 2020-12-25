import { Account } from "./account-table";

export class Customer{
  id!:number;
  fullName!: string;
  dob!:string;
  email!:string;
  mobile!:number;
  aadharNo!:number;
  address!:string;
  locker: boolean =false;
  
  account: Account[] = [{
    id:null as any,
     acc_no:"",
     acc_type:"",
     branchName:"",
     branchCode:"",
     balance:2500.00,
     transaction:[]
  }];
  
}


  // account!: Array<Account>;

  // account: Account[] = [];
  // account: Account[{
  //     id:number
  //    Acc_no!:string; 
  //    Acc_type!:String;
  //    branchName!:string; 
  //    branchCode!:string;
  //    balance!:number;
  //    transaction!: any[];
  // }];
  // account: Array<Account> = new Array<Account>();
  // account:Account[{}];


  // account variables because we have to process it together
    
    //  Acc_no!:string;
    //  Acc_type!:String;
    //  balance!:number;
    //  branchName!:string; 
    //  branchCode!:string;
    //  transaction!: any[];