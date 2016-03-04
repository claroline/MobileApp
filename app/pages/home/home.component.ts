import {Component} from "angular2/core";
import {LoginPage} from "../login/login.component";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";

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

	refresh(){
		this._userService.refreshToken()
		.subscribe(
			(data)=>{
				Config.access_token = data.json().access_token;
				Config.refresh_token = data.json().refresh_token;
			}
		);
	}

	
}