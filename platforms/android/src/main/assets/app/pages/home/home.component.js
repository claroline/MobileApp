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
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var user_service_1 = require("../../shared/user/user.service");
var notifications_service_1 = require("../../shared/notification/notifications.service");
var messages_service_1 = require("../../shared/message/messages.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var config_service_1 = require("../../shared/config.service");
var dialogs = require("ui/dialogs");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
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
        var _this = this;
        dialogs.confirm({
            title: "Déconnexion",
            message: "Êtes_vous sûr(e) de vouloir vous déconnecter ?",
            okButtonText: "Oui",
            cancelButtonText: "Non",
            neutralButtonText: ""
        })
            .then(function (result) {
            if (result) {
                _this._configService.remove("access_token");
                _this._configService.remove("refresh_token");
                _this._router.navigate(['Login']);
            }
        });
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUsa0NBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFFM0Qsc0NBQW1DLGlEQUFpRCxDQUFDLENBQUE7QUFFckYsaUNBQTZCLHVDQUF1QyxDQUFDLENBQUE7QUFFckUsaUNBQTJDLHVDQUF1QyxDQUFDLENBQUE7QUFDbkYsK0JBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFDMUQsSUFBTyxPQUFPLFdBQVcsWUFBWSxDQUFDLENBQUM7QUFHdkMsa0NBQWUsQ0FBQyxlQUFlLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLGFBQWEsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0FBQzVGLGtDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxrQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFZL0U7SUFPRSxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCLEVBQy9CLGNBQTZCO1FBWnpDLGlCQW9FRztRQTVEUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoRSxXQUFXLENBQUM7WUFDVixLQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUViLENBQUM7SUFFTSwwQ0FBdUIsR0FBOUIsVUFBK0IsSUFBUztRQUF4QyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzVELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFTSxxQ0FBa0IsR0FBekIsVUFBMEIsSUFBUztRQUFuQyxpQkFLQztRQUpDLFVBQVUsQ0FBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNsRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsNkJBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCx5QkFBTSxHQUFOO1FBQUEsaUJBa0JDO1FBakJDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDZCxLQUFLLEVBQUUsYUFBYTtZQUNwQixPQUFPLEVBQUUsZ0RBQWdEO1lBQ3pELFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLEtBQUs7WUFDdkIsaUJBQWlCLEVBQUUsRUFBRTtTQUN0QixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNWLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzNDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBSUwsQ0FBQztJQWpFTDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLDBCQUFXLEVBQUUsNENBQW9CLEVBQUUsaUNBQWMsRUFBRSw4QkFBYSxDQUFDO1NBQzlFLENBQUM7O2dCQUFBO0lBdUVBLGVBQUM7QUFBRCxDQUFDLEFBcEVILElBb0VHO0FBcEVVLGdCQUFRLFdBb0VsQixDQUFBIn0=