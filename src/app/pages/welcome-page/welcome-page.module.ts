import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SigninComponent } from "../../components/signin/signin.component";

import { Routes, RouterModule } from "@angular/router";
import { WelcomePageComponent } from "./welcome-page.component";
import { ForgotComponent } from "../../components/forgot/forgot.component";


import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from "angularx-social-login";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("541295936497624")
  }
]);

export function provideConfig() {
  return config;
}

const routes: Routes = [
  { path: "", component: WelcomePageComponent },
  { path: "signin", component: SigninComponent },
 
  { path: "forgot", component: ForgotComponent }
];
@NgModule({
  declarations: [
    SigninComponent,
    ForgotComponent,
 
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SocialLoginModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class WelcomePageModule {}
