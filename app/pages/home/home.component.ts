"use strict";

import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";



@Component({
	selector: 'home',
	templateUrl: 'pages/home/home.html',
	providers: [UserService]
})


export class HomePage {



	constructor(
		private _userService: UserService,
		private _router: Router) {
	}

	display() {
		this._userService.getNotifications()
			.subscribe(
			
		);
	}
}