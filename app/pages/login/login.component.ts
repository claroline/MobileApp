import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";

"use strict";
@Component({
  selector: "login",
  templateUrl: "pages/login/login.html",
  providers: [UserService]
})
export class LoginPage {
  user: User;

  constructor(
    private _router: Router,
    private _userService: UserService) {

    this.user = new User();

    // Hardcode a few values to make testing easy
    this.user.username = "dat";
    this.user.password = "dat";
  }

  signIn() {
    let obs = this._userService.login(this.user);
     console.log(JSON.stringify(obs));
      obs.subscribe(
        () =>this._router.navigate(["Home"]),
        (error) => alert("Mauvaise combinaison nom d'utilisateur/mot de passe")
      );
    
  }

}
