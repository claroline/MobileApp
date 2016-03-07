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
    //this.user.username = "dat";
    //this.user.password = "dat";
  }

  signIn() {
    this._userService.login(this.user)
      .subscribe(
        (data) => {
            Config.access_token = data.json().access_token;
            Config.refresh_token = data.json().refresh_token;
            this._router.navigate(['Home']);

            console.log("Access token au login :" + Config.access_token);
            console.log("Refresh token au login :" + Config.refresh_token);
        },
        (error) => alert("Mauvaise combinaison nom d'utilisateur/mot de passe !")
      );
  }

}
