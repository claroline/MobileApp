"use strict";

import {Component, OnInit} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";



@Component({
	selector: 'home',
	templateUrl: 'pages/home/home.html',
	providers: [UserService]
})


export class HomePage implements OnInit {

	//TODO ajouter la méthode de récupération des notifications
	ngOnInit(){

	}

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