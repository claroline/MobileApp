"use strict";

import {Component, OnInit} from "angular2/core";
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


export class HomePage implements OnInit {

    notificationsList: Array<Notification> = [];
    public unread: number = 0;

    ngOnInit() {

        this._notificationService.load()
            .subscribe(res => {
                res.forEach((resObject) => {
                    this.notificationsList.unshift(resObject);
                });
            });

    }

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _notificationService: NotificationsService) {

    }




}
