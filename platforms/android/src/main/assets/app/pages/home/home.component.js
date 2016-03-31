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
        this.unread = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this._notificationService.load()
            .subscribe(function (res) {
            var cpt = 0;
            res.forEach(function (resObject) {
                if (!resObject.status) {
                    cpt += 1;
                }
                _this.notificationsList.unshift(resObject);
            });
            _this.unread = cpt;
        });
        console.log("Notification  : " + this.unread);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFFM0Qsc0NBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFZckY7SUFzQkksa0JBQ1ksWUFBeUIsRUFDekIsT0FBZSxFQUNmLG9CQUEwQztRQUYxQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQXZCdEQsc0JBQWlCLEdBQXdCLEVBQUUsQ0FBQztRQUNyQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBd0IxQixDQUFDO0lBdEJELDJCQUFRLEdBQVI7UUFBQSxpQkFlQztRQWJHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUNWLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNaLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNwQixHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNiLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUU5QyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsNENBQW9CLENBQUM7U0FDakQsQ0FBQzs7Z0JBQUE7SUFtQ0YsZUFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0JBQVEsV0FnQ3BCLENBQUEifQ==