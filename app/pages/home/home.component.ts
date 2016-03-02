import {Component} from "angular2/core";
import {LoginPage} from "../login/login.component";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";

@Component({
	selector:'home',
	templateUrl:'pages/home/home.html',
	providers:[UserService]
})


export class HomePage{

	constructor(
		private _userService : UserService,
		private _router : Router) { 
	}
}