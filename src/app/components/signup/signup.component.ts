import { Component, OnInit } from "@angular/core";
import { Sigup } from "../../entities/sigup";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  sigup: Sigup;
  constructor() {
    this.sigup = new Sigup();
  }

  ngOnInit() {}

  onSubmit(from: NgForm) {
    if (from.value) {
      console.log(from.value);
    }
  }
}
