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
var app = require('application');
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService, _messageService) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this.notificationsList = this._notificationService.load();
        this.messagesList = this._messageService.loadReceivedMessages();
        setInterval(function () {
            _this._userService.refreshToken();
            console.log("New access token : " + config_1.Config.access_token);
        }, 3600000);
    }
    HomePage.prototype.refreshNotificationPage = function (args) {
        var _this = this;
        setTimeout(function () {
            args.object.refreshing = false;
            _this.notificationsList = _this._notificationService.load();
        }, 1000);
    };
    HomePage.prototype.refreshMessagePage = function (args) {
        var _this = this;
        setTimeout(function () {
            args.object.refreshing = false;
            _this.messagesList = _this._messageService.loadReceivedMessages();
        }, 1000);
    };
    HomePage.prototype.markAsRead = function () {
        this.notificationsList = this._notificationService.load('vu');
    };
    HomePage.prototype.creatingView = function (args) {
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
        drawer.addView(frame, new ndroid.support.v4.widget.DrawerLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
        drawer.addView(linearMenu);
        drawer.addView(frame, new android.support.v4.widget.DrawerLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
        args.view = drawer;
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService, messages_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService, messages_service_1.MessageService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBRTNDLHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBRXJFLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBR25GLElBQU8sR0FBRyxXQUFXLGFBQWEsQ0FBQyxDQUFDO0FBRXBDLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQUM1RixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFXN0U7SUFLRSxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCO1FBVDNDLGlCQXdFQztRQWxFVyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoRSxXQUFXLENBQUM7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