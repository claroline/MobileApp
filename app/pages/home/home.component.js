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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQWdELGVBQWUsQ0FBQyxDQUFBO0FBQ2hFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBRTNDLHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBRXJFLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBR25GLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQUM1RixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFVN0U7SUFLRSxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCO1FBVDNDLGlCQXFDQztRQS9CVyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoRSxXQUFXLENBQUM7WUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pELENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7SUFFTSwwQ0FBdUIsR0FBOUIsVUFBK0IsSUFBUztRQUF4QyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxxQ0FBa0IsR0FBekIsVUFBMEIsSUFBUztRQUFuQyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNsRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdENIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw0Q0FBb0IsRUFBRSxpQ0FBYyxDQUFDO1NBQy9ELENBQUM7O2dCQUFBO0lBd0NGLGVBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBckNZLGdCQUFRLFdBcUNwQixDQUFBIn0=