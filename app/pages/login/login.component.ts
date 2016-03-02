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
    this.user.username = "stan";
    this.user.password = "stan";
  }

  signIn() {
    //this._router.navigate(["Home"]);
    
    this._userService.login(this.user)
      .subscribe(
        () => this._router.navigate(["Home"]),
        (error) => alert(error)
      );
    
  }

}
