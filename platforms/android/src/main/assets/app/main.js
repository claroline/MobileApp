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
var application_1 = require("nativescript-angular/application");
var http_1 = require("@angular/http");
var router_1 = require("nativescript-angular/router");
var router_2 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var config_service_1 = require("./shared/config.service");
var user_service_1 = require("./shared/user/user.service");
require("./livesync-patch");
var app_injector_1 = require("./app-injector");
var app_routes_1 = require("./app.routes");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            providers: [router_2.NS_ROUTER_PROVIDERS],
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "\n    \t<page-router-outlet>\n\n    \t</page-router-outlet>\n\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
application_1.nativeScriptBootstrap(AppComponent, [user_service_1.UserService, config_service_1.ConfigService, http_1.HTTP_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS])
    .then(function (appRef) { return app_injector_1.appInjector(appRef.injector); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLDRCQUFvQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUM3Qyx1QkFBbUMsNkJBQTZCLENBQUMsQ0FBQTtBQUNqRSx1QkFBa0MsNkJBQTZCLENBQUMsQ0FBQTtBQUNoRSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsK0JBQTRCLHlCQUF5QixDQUFDLENBQUE7QUFDdEQsNkJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFDdkQsUUFBTyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDJCQUFtQyxjQUFjLENBQUMsQ0FBQTtBQWNsRDtJQUFBO0lBRUEsQ0FBQztJQWREO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLDRCQUFtQixDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLDZCQUFvQixDQUFDO1lBQ2xDLFFBQVEsRUFBRSxxRUFLVDtTQUNKLENBQUM7O29CQUFBO0lBSUYsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLG9CQUFZLGVBRXhCLENBQUE7QUFJRCxtQ0FBcUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQywwQkFBVyxFQUFDLDhCQUFhLEVBQUMscUJBQWMsRUFBRSxpQ0FBb0IsQ0FBQyxDQUFDO0tBQ3BHLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLDBCQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUMifQ==