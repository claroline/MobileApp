/// <reference path="../../../node_modules/nativescript-pulltorefresh/pulltorefresh.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var user_service_1 = require("../../shared/user/user.service");
var config_1 = require("../../shared/config");
var notifications_service_1 = require("../../shared/notification/notifications.service");
var messages_service_1 = require("../../shared/message/messages.service");
var element_registry_1 = require("nativescript-angular/element-registry");
//import {PullToRefresh} from "nativescript-pulltorefresh";
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService, _messageService) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this.loadNotifications();
        this.receivedMessages();
        setInterval(function () {
            _this._userService.refreshToken();
            console.log("New access token : " + config_1.Config.access_token);
        }, 3600000);
    }
    HomePage.prototype.receivedMessages = function () {
        this.receivedMessagesList = this._messageService.loadReceivedMessages();
        // .subscribe(res=> {
        //   res.forEach((resObject)=>{
        //     this.receivedMessagesList.unshift(resObject);
        //   });
        // });
    };
    HomePage.prototype.loadNotifications = function () {
        this.notificationsList = this._notificationService.load();
        // .subscribe(res => {
        //   res.forEach((resObject) => {
        //     this.notificationsList.unshift(resObject);
        //   });
        // });
    };
    HomePage.prototype.refreshNotificationPage = function (args) {
        var _this = this;
        setTimeout(function () {
            args.object.refreshing = false;
            //this.notificationsList = [];
            _this.loadNotifications();
        }, 1000);
    };
    HomePage.prototype.refreshMessagePage = function (args) {
        var _this = this;
        setTimeout(function () {
            args.object.refreshing = false;
            //this.receivedMessagesList = [];
            _this.receivedMessages();
        }, 1000);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService, messages_service_1.MessageService],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService, messages_service_1.MessageService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQWdELGVBQWUsQ0FBQyxDQUFBO0FBQ2hFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBRTNDLHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBR3JFLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25GLDJEQUEyRDtBQUkzRCxrQ0FBZSxDQUFDLGVBQWUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsYUFBYSxFQUFuRCxDQUFtRCxDQUFDLENBQUM7QUFhNUY7SUFLRSxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCO1FBVDNDLGlCQXNEQztRQWhEVyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsV0FBVyxDQUFDO1lBQ1YsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6RCxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFYixDQUFDO0lBRU0sbUNBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN4RSxxQkFBcUI7UUFDckIsK0JBQStCO1FBQy9CLG9EQUFvRDtRQUNwRCxRQUFRO1FBQ1IsTUFBTTtJQUNSLENBQUM7SUFFTSxvQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFELHNCQUFzQjtRQUN0QixpQ0FBaUM7UUFDakMsaURBQWlEO1FBQ2pELFFBQVE7UUFDUixNQUFNO0lBQ1IsQ0FBQztJQUVNLDBDQUF1QixHQUE5QixVQUErQixJQUFTO1FBQXhDLGlCQU1DO1FBTEMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQy9CLDhCQUE4QjtZQUM5QixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0scUNBQWtCLEdBQXpCLFVBQTBCLElBQVM7UUFBbkMsaUJBT0M7UUFOQyxVQUFVLENBQUM7WUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDL0IsaUNBQWlDO1lBQ2pDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTFCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUE3REg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixFQUFFLGlDQUFjLENBQUM7U0FHL0QsQ0FBQzs7Z0JBQUE7SUF5REYsZUFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksZ0JBQVEsV0FzRHBCLENBQUEifQ==