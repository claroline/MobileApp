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
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this.notificationsList = [];
        this.RefreshedTimes = 0;
        this.Message = "Pull to refresh";
        this.loadNotifications();
    }
    HomePage.prototype.loadNotifications = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                _this.notificationsList.unshift(resObject);
            });
        });
    };
    HomePage.prototype.refreshNotifications = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                if (_this.notificationsList.indexOf(resObject) == -1) {
                    console.log("ajout nouveau");
                    _this.notificationsList.unshift(resObject);
                }
            });
        });
    };
    HomePage.prototype.refreshPage = function (args) {
        var _this = this;
        console.log("page refresh -> go");
        setTimeout(function () {
            args.object.refreshing = false;
            _this.refreshNotifications();
        }, 1000);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RkFBNEY7QUFFNUYsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBRTNELHNDQUFtQyxpREFBaUQsQ0FBQyxDQUFBO0FBRXJGLGlDQUEyQyx1Q0FBdUMsQ0FBQyxDQUFBO0FBR25GLGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQVc1RjtJQU1JLGtCQUNZLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixvQkFBMEM7UUFGMUMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQdEQsc0JBQWlCLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixZQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFNNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLG9DQUFpQixHQUF4QjtRQUFBLGlCQU9DO1FBTkksSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRTthQUM1QixTQUFTLENBQUMsVUFBQSxHQUFHO1lBQ1YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7Z0JBQ2xCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSx1Q0FBb0IsR0FBM0I7UUFBQSxpQkFXQztRQVZHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDN0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsQ0FBQztZQUVMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR00sOEJBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUE1QixpQkFNQztRQUxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxVQUFVLENBQUM7WUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDaEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQWxETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsNENBQW9CLENBQUM7U0FFakQsQ0FBQzs7Z0JBQUE7SUF5REYsZUFBQztBQUFELENBQUMsQUF0REQsSUFzREM7QUF0RFksZ0JBQVEsV0FzRHBCLENBQUEifQ==