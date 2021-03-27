import { Account } from './Account';


export class Accounts {
  accounts: Array<Account> = [
    new Account('A1', 'active'),
    new Account('A2', 'inactive'),
    new Account('A3', 'unknown'),
  ];
  addNewAccount(acc: Account) {
    this.accounts.splice(0, 0, acc);
  }
  deleteAccount(acc: Account){
      let index = this.accounts.indexOf(acc);
      this.accounts.splice(0,index);
  }
  updateAccountStatus(index:number,status:string){
      console.log(this.accounts[index])
    this.accounts[index].updateStatus(status);
  }
}
