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
var element_registry_1 = require("nativescript-angular/element-registry");
var messages_service_1 = require("../../shared/message/messages.service");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService, _messageService) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this.notificationsList = [];
        this.receivedMessagesList = [];
        this.loadNotifications();
        this.receivedMessages();
        setInterval(function () {
            _this._userService.refreshToken();
            console.log("New access token : " + config_1.Config.access_token);
        }, 3600000);
    }
    HomePage.prototype.receivedMessages = function () {
        var _this = this;
        this._messageService.loadReceivedMessages()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                _this.receivedMessagesList.unshift(resObject);
            });
        });
    };
    HomePage.prototype.loadNotifications = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                _this.notificationsList.unshift(resObject);
            });
        });
    };
    HomePage.prototype.refreshNotificationPage = function (args) {
        var _this = this;
        setTimeout(function () {
            args.object.refreshing = false;
            _this.notificationsList = [];
            _this.loadNotifications();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFFNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBQzNDLHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBRW5GLGlDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBSXJFLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVc1RjtJQU1JLGtCQUNZLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixvQkFBMEMsRUFDMUMsZUFBK0I7UUFWL0MsaUJBOENDO1FBdkNlLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVIzQyxzQkFBaUIsR0FBd0IsRUFBRSxDQUFDO1FBQzVDLHlCQUFvQixHQUFtQixFQUFFLENBQUM7UUFRbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsV0FBVyxDQUFDO1lBQ1IsS0FBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFFbEIsQ0FBQztJQUVNLG1DQUFnQixHQUF2QjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTthQUN4QyxTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1osR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0JBQ3BCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxvQ0FBaUIsR0FBeEI7UUFBQSxpQkFPQztRQU5FLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDMUIsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU0sMENBQXVCLEdBQTlCLFVBQStCLElBQVM7UUFBeEMsaUJBTUM7UUFMRyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBcERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw0Q0FBb0IsRUFBRSxpQ0FBYyxDQUFDO1NBRWpFLENBQUM7O2dCQUFBO0lBaURGLGVBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLGdCQUFRLFdBOENwQixDQUFBIn0=