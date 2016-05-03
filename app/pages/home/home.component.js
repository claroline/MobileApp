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
var notifications_service_1 = require("../../shared/notification/notifications.service");
var messages_service_1 = require("../../shared/message/messages.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var config_service_1 = require("../../shared/config.service");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService, _messageService, _configService) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this._configService = _configService;
        this.notificationsList = this._notificationService.load();
        this.messagesList = this._messageService.loadReceivedMessages();
        setInterval(function () {
            _this._userService.refreshToken();
            console.log("New access token : " + _this._configService.getAccessToken());
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
    HomePage.prototype.logOut = function () {
        this._configService.remove("access_token");
        this._configService.remove("refresh_token");
        this._router.navigate(['Login']);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFDNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUE2Qix1Q0FBdUMsQ0FBQyxDQUFBO0FBRXJFLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25GLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTFELGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQUM1RixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFhN0U7SUFLRSxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCLEVBQy9CLGNBQTZCO1FBVnpDLGlCQWtEQztRQTVDVyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDckMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoRSxXQUFXLENBQUM7WUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7SUFFTSwwQ0FBdUIsR0FBOUIsVUFBK0IsSUFBUztRQUF4QyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxxQ0FBa0IsR0FBekIsVUFBMEIsSUFBUztRQUFuQyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNsRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFqREg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixFQUFFLGlDQUFjLEVBQUUsOEJBQWEsQ0FBQztTQUM5RSxDQUFDOztnQkFBQTtJQXFERixlQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQztBQWxEWSxnQkFBUSxXQWtEcEIsQ0FBQSJ9