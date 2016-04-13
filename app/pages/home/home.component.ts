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
import {MessageService} from "../../shared/message/messages.service";
import {Message} from "../../shared/message/message";


registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);


@Component({
    selector: 'home',
    templateUrl: 'pages/home/home.html',
    providers: [UserService, NotificationsService, MessageService]

})


export class HomePage {

    notificationsList: Array<Notification> = [];
    receivedMessagesList: Array<Message> = [];
    

    constructor(
        private _userService: UserService,
        private _router: Router,
        private _notificationService: NotificationsService,
        private _messageService: MessageService) {
           this.loadNotifications();
           this.receivedMessages();
           setInterval(()=>{
               this._userService.refreshToken();
               console.log("New access token : "+Config.access_token);
           },3600000);

    }

    public receivedMessages(){
      this._messageService.loadReceivedMessages()
        .subscribe(res=> {
          res.forEach((resObject)=>{
            this.receivedMessagesList.unshift(resObject);
          });
        });
    }

    public loadNotifications(){
       this._notificationService.load()
            .subscribe(res => {
                res.forEach((resObject) => {
                    this.notificationsList.unshift(resObject);
                });
            });
    }

    public refreshNotificationPage(args: any) {
        setTimeout(() => {
            args.object.refreshing = false;
            this.notificationsList = [];
            this.loadNotifications();
        }, 1000);
    }

}
