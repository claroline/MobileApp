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
//import { registerElement, ViewClass } from "nativescript-angular/element-registry";
//registerElement("pullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService) {
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this.notificationsList = [];
        this.getNotifications();
    }
    HomePage.prototype.getNotifications = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                _this.notificationsList.unshift(resObject);
            });
        });
    };
    HomePage.prototype.refreshList = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFFM0Qsc0NBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFFckYscUZBQXFGO0FBRXJGLDhGQUE4RjtBQVU5RjtJQU1JLGtCQUNZLFlBQXlCLEVBQ3pCLE9BQWUsRUFDaEIsb0JBQTBDO1FBRnpDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDaEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQVByRCxzQkFBaUIsR0FBd0IsRUFBRSxDQUFDO1FBUXhDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBRzVCLENBQUM7SUFFRCxtQ0FBZ0IsR0FBaEI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsOEJBQVcsR0FBWDtJQUVBLENBQUM7SUFqQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixDQUFDO1NBQ2pELENBQUM7O2dCQUFBO0lBaUNGLGVBQUM7QUFBRCxDQUFDLEFBOUJELElBOEJDO0FBOUJZLGdCQUFRLFdBOEJwQixDQUFBIn0=