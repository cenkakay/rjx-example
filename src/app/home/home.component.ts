import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Subscription, Observable } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;
  constructor() {}

  ngOnInit() {
    /*   this.firstSubscription = interval(1000).subscribe((count) => {
      console.log(count);
    }); */
    // "observer" is listener itself.
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }
}
