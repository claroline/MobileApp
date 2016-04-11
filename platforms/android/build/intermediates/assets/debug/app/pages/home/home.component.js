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
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService) {
        var _this = this;
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this.notificationsList = [];
        this.RefreshedTimes = 0;
        this.Message = "Pull to refresh";
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                _this.notificationsList.unshift(resObject);
            });
        });
    }
    HomePage.prototype.refreshPage = function (args) {
        var _this = this;
        console.log("page refresh -> go");
        setTimeout(function () {
            args.object.refreshing = false;
            _this.RefreshedTimes += 1;
            _this.Message = "Pull to refresh - " + _this.RefreshedTimes;
        }, 1000);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/homev2.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFFNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBR25GLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVc1RjtJQU1JLGtCQUNZLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixvQkFBMEM7UUFUMUQsaUJBdUNDO1FBaENlLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBUHRELHNCQUFpQixHQUF3QixFQUFFLENBQUM7UUFDckMsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsWUFBTyxHQUFHLGlCQUFpQixDQUFDO1FBTS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHWCxDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUE1QixpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUM7WUFDekIsS0FBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDO1FBQzlELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFuQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixDQUFDO1NBRWpELENBQUM7O2dCQUFBO0lBMENGLGVBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDO0FBdkNZLGdCQUFRLFdBdUNwQixDQUFBIn0=