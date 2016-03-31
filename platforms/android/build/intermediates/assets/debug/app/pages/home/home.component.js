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
var HomePage = (function () {
    function HomePage(_userService, _router, _notificationService) {
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this.notificationsList = [];
        this.unread = 0; // number of unread notifications
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            res.forEach(function (resObject) {
                if (!resObject.status) {
                    _this.unread = _this.unread + 1;
                }
                _this.notificationsList.unshift(resObject);
            });
        });
        console.log("Nombre de notifications non lues : " + this.unread);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFFM0Qsc0NBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFZckY7SUF1Qkksa0JBQ1ksWUFBeUIsRUFDekIsT0FBZSxFQUNmLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXhCdEQsc0JBQWlCLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsaUNBQWlDO0lBeUI1RCxDQUFDO0lBdEJELDJCQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQUNELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFOUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJFLENBQUM7SUE1Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLDRDQUFvQixDQUFDO1NBQ2pELENBQUM7O2dCQUFBO0lBa0NGLGVBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGdCQUFRLFdBK0JwQixDQUFBIn0=