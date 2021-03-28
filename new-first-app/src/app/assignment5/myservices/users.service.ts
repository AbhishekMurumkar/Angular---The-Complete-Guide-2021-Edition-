import {User} from "./User";

export class UsersService {

  users: Array<User> = [
    new User("U1",true),
    new User("U2",false),
    new User("U3",false),
    new User("U4",true)
  ];

  changeStatus(index:number){
    console.log("service",index);
    this.users[index].updateStatus()
  }
}
