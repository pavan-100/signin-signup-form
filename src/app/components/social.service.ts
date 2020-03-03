import { Injectable } from "@angular/core";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialUser
} from "angularx-social-login";
import { AuthService } from "angularx-social-login";
@Injectable({
  providedIn: "root"
})
export class SocialService {
  constructor(private authService: AuthService) {}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
