export class Account {
     id!: number; 
     acc_no!:string; 
     acc_type!:string;
     branchName!:string; 
     branchCode!:string;
     balance!:number;
     transaction: Transaction[]=[{
          amount:null as any,
          date:"",
          ifsc:"",
          transferAccNo:null as any,
          transferType:""
     }];

     deposit: DebitTransaction[] = [{
          
          deposit_amount:0,
          date: ""
     }];
     
     withdraw: Withdraw[] = [{
          withdraw_amount:563,
          date: ""
     }];
}


export class Withdraw{
withdraw_amount!:number;
date!:string;
}

export class Transaction{
     amount!:number;
     date!:string;
     ifsc!:string;
     transferAccNo!:number;
     transferType!:string;

}

export class DebitTransaction{
     // id!:number;
     deposit_amount!:number;
  date!:string;
}