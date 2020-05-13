import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SigninComponent } from "../../components/signin/signin.component";
import {  HttpClientModule } from "@angular/common/http";

import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page.component";
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { EmployerDetailsComponent } from '../../components/employer-details/employer-details.component';
import { EmployerDetailsService } from "../../components/employer-details/employer-details.service";



const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "signin", component: SigninComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "employer", component: EmployerDetailsComponent },

];
@NgModule({
  declarations: [
    SigninComponent,
    NavbarComponent,
    EmployerDetailsComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),HttpClientModule
  ],
  providers: [
    EmployerDetailsService

  ]
})
export class WelcomePageModule {}
