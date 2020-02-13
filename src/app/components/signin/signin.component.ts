import { Component, OnInit } from "@angular/core";
import { Sigin } from "../../entities/sigin";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  sigin: Sigin;
  constructor() {
    this.sigin = new Sigin();
  }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    if (form.value) {
      console.log(form.value);
    }
  }
}
