import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit,OnDestroy {
  user: { id: number; name: string };
  routerSubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activatedRoute.snapshot.params["id"],
      name: this.activatedRoute.snapshot.params["name"],
    };
    this.routerSubscription = this.activatedRoute.params.subscribe( /* Loading Route Reactively */
    (updatedParams: Params) => {
      console.log(updatedParams);
      this.user = {
        id: updatedParams["id"],
        name: updatedParams["name"],
      };
    });
  }

  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }
}
