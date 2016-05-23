import {Component} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {User} from "../../shared/user/user";
import {UserService} from "../../shared/user/user.service";
import {ConfigService} from "../../shared/config.service";



"use strict";
@Component({
    selector: "login",
    templateUrl: "pages/login/login.html",
    providers: [UserService, ConfigService]
})


export class LoginPage {
    user: User;

    constructor(
        private _router: Router,
        private _userService: UserService,
        private _configService: ConfigService) {


        this.user = new User();

        // Harcoded values to avoid typing them
        //this.user.username = "stan";
        //this.user.password = "stan";

    }

    signIn() {
           this._userService.login(this.user)
            .subscribe(
                (data) => {
                this._configService.setAccessToken(data.json().access_token);
                this._configService.setRefreshToken(data.json().refresh_token);
                this._router.navigate(['Home']);
                this._configService.expire(false);
                console.log(this._configService.getAccessToken());

                },
                (error) => alert("Mauvaise combinaison nom d'utilisateur/mot de passe")
            );


    }



}
