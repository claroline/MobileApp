"use strict";

import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";
import {NotificationsService} from "../../shared/notification/notifications.service";
import {Notification} from "../../shared/notification/notification";



@Component({
    selector: 'home',
    templateUrl: 'pages/home/home.html',
    providers: [UserService, NotificationsService]
})


export class HomePage {

    notificationsList: Array<Notification> = [];




    constructor(
        private _userService: UserService,
        private _router: Router,
        private _notificationService: NotificationsService) {
        this._notificationService.load()
            .subscribe(res => {
                res.forEach((resObject) => {
                    this.notificationsList.unshift(resObject);
                });
            });
    }




}
