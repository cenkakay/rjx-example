import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserService } from "./user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  constructor(private userService: UserService) {}
  activatedSubscription: Subscription;

  ngOnInit() {
    this.activatedSubscription = this.userService.activatedEmitter.subscribe(
      (data) => {
        this.userActivated = data;
      }
    );
  }
  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }
}
