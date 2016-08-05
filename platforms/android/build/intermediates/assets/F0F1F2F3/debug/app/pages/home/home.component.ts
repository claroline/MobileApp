

"use strict";

import {Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef} from "@angular/core";
import {Router} from "@angular/router";
import {UserService} from "../../shared/user/user.service";
import {Observable} from "rxjs/Rx";
import {NotificationsService} from "../../shared/notification/notifications.service";
import {Notification} from "../../shared/notification/notification";
import {MessageService} from "../../shared/message/messages.service";
import {Message} from "../../shared/message/message";
import { registerElement, ViewClass } from "nativescript-angular/element-registry";
import {ConfigService} from "../../shared/config.service";
import dialogs = require("ui/dialogs");
import { Page } from "ui/page";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import * as ObservableModule from "data/observable";

registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("FAB", () => require("nativescript-floatingactionbutton").Fab);




@Component({
  selector: 'home',
  templateUrl: 'pages/home/homev2.html',
  providers: [UserService, NotificationsService, MessageService, ConfigService]
})


export class HomePage extends ObservableModule.Observable implements OnInit {

  notificationsList: Observable<Array<Notification>>;
  messagesList: Observable<Array<Message>>;




  constructor(
    private _userService: UserService,
    private _router: Router,
    private _notificationService: NotificationsService,
    private _messageService: MessageService,
    private _configService: ConfigService,
  @Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef) {
    super();
      this.notificationsList = this._notificationService.load();
      this.messagesList = this._messageService.loadReceivedMessages();
      setInterval(()=>{
        this._configService.expire(true);
        this._userService.refreshToken();
        console.log("New access token : "+this._configService.getAccessToken());
      },3600000);





    }

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
   private drawer: SideDrawerType;

   ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
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

    logOut(){
        dialogs.confirm({
          title: "Déconnexion",
          message: "Êtes-vous sûr(e) de vouloir vous déconnecter ?",
          okButtonText: "Oui",
          cancelButtonText: "Non",
          neutralButtonText: ""
        })
        .then(result=>{
          if (result){
            this._configService.expire(true);
            this._configService.remove("access_token");
            this._configService.remove("refresh_token");
            this._router.navigate(['/login']);
          }
        });



    }

    newMessage(){

    }

    public openDrawer() {
            this.drawer.showDrawer();
        }








  }
