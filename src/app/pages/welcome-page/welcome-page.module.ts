import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SigninComponent } from "../../components/signin/signin.component";
import { SignupComponent } from "../../components/signup/signup.component";
import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page.component";
import { ForgotComponent } from "../../components/forgot/forgot.component";

const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot", component: ForgotComponent }
];
@NgModule({
  declarations: [
    SigninComponent,
    ForgotComponent,
    SignupComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class WelcomePageModule {}
