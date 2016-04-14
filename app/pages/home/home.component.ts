/// <reference path="../../../node_modules/nativescript-pulltorefresh/pulltorefresh.d.ts" />
"use strict";

import {Component,ChangeDetectionStrategy} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";
import {Observable} from "rxjs/Rx";
import {NotificationsService} from "../../shared/notification/notifications.service";
import {Notification} from "../../shared/notification/notification";
import {MessageService} from "../../shared/message/messages.service";
import {Message} from "../../shared/message/message";

import { registerElement, ViewClass } from "nativescript-angular/element-registry";
//import {PullToRefresh} from "nativescript-pulltorefresh";



registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);



@Component({
  selector: 'home',
  templateUrl: 'pages/home/home.html',
  providers: [UserService, NotificationsService, MessageService]
})


export class HomePage {

  notificationsList: Observable<Array<Notification>>;
  receivedMessagesList: Observable<Array<Message>>;

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
    this.receivedMessagesList = this._messageService.loadReceivedMessages();
  }

  public loadNotifications(){
    this.notificationsList = this._notificationService.load();
  }

  public refreshNotificationPage(args: any) {
    setTimeout(() => {
      args.object.refreshing = false;
      this.loadNotifications();
    }, 1000);
  }

  public refreshMessagePage(args: any){
    setTimeout(() => {
      args.object.refreshing = false;
      this.receivedMessages();
    }, 1000);
  }

}
