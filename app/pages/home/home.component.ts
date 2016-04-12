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
    

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _notificationService: NotificationsService) {
           this.loadNotifications();
           setInterval(()=>{
               this._userService.refreshToken();
               console.log("New access token : "+Config.access_token);
           },3600000);

    }




    public loadNotifications(){
       this._notificationService.load()
            .subscribe(res => {
                res.forEach((resObject) => {
                    this.notificationsList.unshift(resObject);
                });
            });
    }

    public refreshPage(args: any) {
        setTimeout(() => {
            args.object.refreshing = false;
            this.notificationsList = [];
            this.loadNotifications();
        }, 1000);
    }

}
