import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable({
    providedIn:"root"
})
export class CounterService{

    activeConversions:number =0;
    inActiveConversions:number=0;
    trackActiveConversions:any;
    trackInactiveConversions:any;

    constructor(private usersService:UsersService){

        this.trackActiveConversions = this.usersService.activeConverter.subscribe(()=>{
            this.activeConversions++;
            console.log('new active user : '+this.activeConversions);
        });
        this.trackInactiveConversions = this.usersService.inActiveConverter.subscribe(()=>{
            this.inActiveConversions++;
            console.log("New Inactive user: "+this.inActiveConversions);
        });
        console.log(this.trackActiveConversions,this.trackInactiveConversions);
    }

    getActiveCount():number{
        return this.activeConversions;
    }
    getInactiveCount():number{
        return this.inActiveConversions;
    }
}