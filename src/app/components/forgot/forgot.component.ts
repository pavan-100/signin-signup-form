import { Component, OnInit } from "@angular/core";
import { Forgot } from "../../entities/forgot";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.css"]
})
export class ForgotComponent implements OnInit {
  forgot: Forgot;
  constructor() {
    this.forgot = new Forgot();
  }

  ngOnInit() {}
  onSubmit(from: NgForm) {
    if (from.value) {
      console.log(from.value);
    }
  }
}
