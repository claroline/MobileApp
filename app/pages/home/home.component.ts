/// <reference path="../../../node_modules/nativescript-pulltorefresh/pulltorefresh.d.ts" />
"use strict";

import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {UserService} from "../../shared/user/user.service";
import {Config} from "../../shared/config";
import {Observable} from "rxjs/Rx";
import {NotificationsService} from "../../shared/notification/notifications.service";
import {Notification} from "../../shared/notification/notification";
import {MessageService} from "../../shared/message/messages.service";
import {Message} from "../../shared/message/message";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";

import placeholder = require("ui/placeholder");
import app = require('application');

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
registerElement("CardView", () => require("nativescript-cardview").CardView);



@Component({
  selector: 'home',
  templateUrl: 'pages/home/home.html',
  providers: [UserService, NotificationsService, MessageService]
})


export class HomePage {

  notificationsList: Observable<Array<Notification>>;
  messagesList: Observable<Array<Message>>;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _notificationService: NotificationsService,
    private _messageService: MessageService) {
    this.notificationsList = this._notificationService.load();
    this.messagesList = this._messageService.loadReceivedMessages();
    setInterval(()=>{
      this._userService.refreshToken();
      console.log("New access token : "+Config.access_token);
    },3600000);

  }

  public refreshNotificationPage(args: any) {
    setTimeout(() => {
      args.object.refreshing = false;
      this.notificationsList = this._notificationService.load();
    }, 1000);
  }

  public refreshMessagePage(args: any){
    setTimeout(() => {
      args.object.refreshing = false;
      this.messagesList = this._messageService.loadReceivedMessages();
    }, 1000);
  }

  markAsRead(){
     this.notificationsList = this._notificationService.load('vu');
  }

  creatingView(args: placeholder.CreateViewEventData) {
    var appContext = args.context;
    var drawer = new android.support.v4.widget.DrawerLayout(app.android.context);
    var frame = new android.widget.FrameLayout(app.android.context);

    var linearMenu = new android.widget.LinearLayout(appContext);
    linearMenu.setOrientation(1);

    // adding the menu options
    var textView1 = new android.widget.TextView(appContext);
    textView1.setText("ITEM 1");
    var textView2 = new android.widget.TextView(appContext);
    textView2.setText("ITEM 2");
    var textView3 = new android.widget.TextView(appContext);
    textView3.setText("ITEM 3");

    // setting layout params
    var lp = new android.support.v4.widget.DrawerLayout.LayoutParams(100, android.widget.LinearLayout.LayoutParams.MATCH_PARENT);
    lp.gravity = android.view.Gravity.START;

    linearMenu.setLayoutParams(lp);
    linearMenu.addView(textView1);
    linearMenu.addView(textView2);
    linearMenu.addView(textView3);

    // finally adding the elements to the DrawerLayout and attaching it to the NativeScript placeholder
    drawer.addView(frame, new  ndroid.support.v4.widget.DrawerLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    drawer.addView(linearMenu);


    drawer.addView(frame, new android.support.v4.widget.DrawerLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
    args.view = drawer;
}

 
}
