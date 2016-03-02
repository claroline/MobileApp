import {Component} from "angular2/core";
import {Router} from "angular2/router";

import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";

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
        () => this._router.navigate(["Home"]),
        (error) => alert("Mauvais nom d'utilisateur et/ou mot de passe !")
      );
    
  }

}
