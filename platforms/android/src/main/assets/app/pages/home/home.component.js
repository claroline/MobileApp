"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../shared/user/user.service");
var notifications_service_1 = require("../../shared/notification/notifications.service");
var messages_service_1 = require("../../shared/message/messages.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var config_service_1 = require("../../shared/config.service");
var dialogs = require("ui/dialogs");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var ObservableModule = require("data/observable");
element_registry_1.registerElement("PullToRefresh", function () { return require("nativescript-pulltorefresh").PullToRefresh; });
element_registry_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
element_registry_1.registerElement("FAB", function () { return require("nativescript-floatingactionbutton").Fab; });
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(_userService, _router, _notificationService, _messageService, _configService, page, _changeDetectionRef) {
        var _this = this;
        _super.call(this);
        this._userService = _userService;
        this._router = _router;
        this._notificationService = _notificationService;
        this._messageService = _messageService;
        this._configService = _configService;
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.notificationsList = this._notificationService.load();
        this.messagesList = this._messageService.loadReceivedMessages();
        setInterval(function () {
            _this._configService.expire(true);
            _this._userService.refreshToken();
            console.log("New access token : " + _this._configService.getAccessToken());
        }, 3600000);
    }
    HomePage.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    HomePage.prototype.ngOnInit = function () {
        this.set("mainContentText", "SideDrawer for NativeScript can be easily setup in the XML definition of your page by defining main- and drawer-content. The component"
            + " has a default transition and position and also exposes notifications related to changes in its state. Swipe from left to open side drawer.");
    };
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
            message: "Êtes-vous sûr(e) de vouloir vous déconnecter ?",
            okButtonText: "Oui",
            cancelButtonText: "Non",
            neutralButtonText: ""
        })
            .then(function (result) {
            if (result) {
                _this._configService.expire(true);
                _this._configService.remove("access_token");
                _this._configService.remove("refresh_token");
                _this._router.navigate(['/login']);
            }
        });
    };
    HomePage.prototype.newMessage = function () {
    };
    HomePage.prototype.openDrawer = function () {
        this.drawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], HomePage.prototype, "drawerComponent", void 0);
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/homev2.html',
            providers: [user_service_1.UserService, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService]
        }),
        __param(5, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router, notifications_service_1.NotificationsService, messages_service_1.MessageService, config_service_1.ConfigService, page_1.Page, core_1.ChangeDetectorRef])
    ], HomePage);
    return HomePage;
}(ObservableModule.Observable));
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLHFCQUFrRixlQUFlLENBQUMsQ0FBQTtBQUNsRyx1QkFBcUIsaUJBQWlCLENBQUMsQ0FBQTtBQUN2Qyw2QkFBMEIsZ0NBQWdDLENBQUMsQ0FBQTtBQUUzRCxzQ0FBbUMsaURBQWlELENBQUMsQ0FBQTtBQUVyRixpQ0FBNkIsdUNBQXVDLENBQUMsQ0FBQTtBQUVyRSxpQ0FBMkMsdUNBQXVDLENBQUMsQ0FBQTtBQUNuRiwrQkFBNEIsNkJBQTZCLENBQUMsQ0FBQTtBQUMxRCxJQUFPLE9BQU8sV0FBVyxZQUFZLENBQUMsQ0FBQztBQUN2QyxxQkFBcUIsU0FBUyxDQUFDLENBQUE7QUFDL0Isd0JBQXVELDRDQUE0QyxDQUFDLENBQUE7QUFDcEcsSUFBWSxnQkFBZ0IsV0FBTSxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELGtDQUFlLENBQUMsZUFBZSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxhQUFhLEVBQW5ELENBQW1ELENBQUMsQ0FBQztBQUM1RixrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usa0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBWS9FO0lBQThCLDRCQUEyQjtJQVF2RCxrQkFDVSxZQUF5QixFQUN6QixPQUFlLEVBQ2Ysb0JBQTBDLEVBQzFDLGVBQStCLEVBQy9CLGNBQTZCLEVBQ2pCLElBQVUsRUFBVSxtQkFBc0M7UUFkbEYsaUJBaUdHO1FBbEZDLGlCQUFPLENBQUM7UUFOQSxp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