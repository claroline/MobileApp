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

    // Harcoded values to avoid typing them
    this.user.username = "stan";
    this.user.password = "stan";
  }

  signIn() {
    this._userService.login(this.user)
      .subscribe(
        (data) => {
            Config.access_token = data.json().access_token;
            Config.refresh_token = data.json().refresh_token;
            this._router.navigate(['Home']);
            console.log(Config.access_token);
        },
        (error) => alert("Mauvaise combinaison nom d'utilisateur/mot de passe !")
      );
  }

}
