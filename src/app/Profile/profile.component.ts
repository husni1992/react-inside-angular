import { Component } from "@angular/core";
declare var window: any;
@Component({
  selector: "profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  title = "Profile page";

  ngOnInit() {
    console.log("test");
  }
}
