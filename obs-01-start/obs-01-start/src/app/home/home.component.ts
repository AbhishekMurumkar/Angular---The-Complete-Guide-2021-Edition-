import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { reduce,map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private mySubscription: Subscription;
  constructor() {
    // 4.1
    // this.mySubscription = interval(1000).subscribe(count=>console.log(count));
    // 4.2
    let count = 0;
    let sum = 0
    let obs = Observable.create(
      (observable) => {
        setInterval(
          () => {
            observable.next(++count);
            if (count == 5) { observable.complete() }
            if (count == 10) { observable.error(new Error('count is more than 10')) }
          }, 1000)
      });
    this.mySubscription = obs.pipe(
      map((acc:number)=>{console.log("in map",acc); return acc;}),
      reduce((acc,value:number) =>{console.log("in reduce",acc); return acc+value;}, 0)
    ).subscribe(
      (data) => { console.log(data); /*sum+=data*/ },
      (err) => alert(err),
      () => console.log("Completed Subscription. Total = " + sum)
    )
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

}
