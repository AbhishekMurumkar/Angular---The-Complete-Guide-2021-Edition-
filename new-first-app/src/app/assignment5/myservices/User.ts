
export class User{
    constructor(private name:string, private isOnline:boolean) {}
    updateStatus(){
        this.isOnline= !this.isOnline;
    }
}