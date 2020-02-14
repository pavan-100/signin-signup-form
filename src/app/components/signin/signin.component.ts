import { Component, OnInit } from "@angular/core";
import { Sigin } from "../../entities/sigin";
import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  sigin: Sigin;

  constructor(private _snackBar: MatSnackBar) {
    this.sigin = new Sigin();
  }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    if (form.value) {
      console.log(form.value);
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }
}
