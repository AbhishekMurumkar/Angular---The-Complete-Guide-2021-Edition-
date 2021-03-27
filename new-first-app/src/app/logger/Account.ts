export class Account{

    constructor(private name:string,private status:string){
        this.name=name;
        this.status=status;
    }    public deleteAccount

    updateStatus=(newStatus:string)=>{
        this.status=newStatus;
    }


}