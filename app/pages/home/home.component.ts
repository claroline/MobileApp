/// <reference path="../../../node_modules/nativescript-pulltorefresh/pulltorefresh.d.ts" />

"use strict";

import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";
import {NotificationsService} from "../../shared/notification/notifications.service";
import {Notification} from "../../shared/notification/notification";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import {PullToRefresh} from "nativescript-pulltorefresh";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);


@Component({
    selector: 'home',
    templateUrl: 'pages/home/home.html',
    providers: [UserService, NotificationsService]

})


export class HomePage {

    notificationsList: Array<Notification> = [];
    public RefreshedTimes = 0;
    public Message = "Pull to refresh";

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

    

    public refreshPage(args: any) {
        console.log("page refresh -> go");
        setTimeout(() => {
            args.object.refreshing = false;
             
        }, 1000);
    }

    
    








}
