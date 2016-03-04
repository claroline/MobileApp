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
var HomePage = (function () {
    function HomePage(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    HomePage.prototype.refresh = function () {
        this._userService.refreshToken()
            .subscribe(function (data) {
            config_1.Config.access_token = data.json().access_token;
            config_1.Config.refresh_token = data.json().refresh_token;
        });
    };
    HomePage.prototype.display = function () {
        console.log("access token après refresh : " + config_1.Config.access_token);
        console.log("refresh_token après refresh : " + config_1.Config.refresh_token);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'pages/home/home.html',
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDZCQUEwQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQzNELHVCQUFxQixxQkFBcUIsQ0FBQyxDQUFBO0FBUzNDO0lBRUMsa0JBQ1MsWUFBMEIsRUFDMUIsT0FBZ0I7UUFEaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUN6QixDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO2FBQy9CLFNBQVMsQ0FDVCxVQUFDLElBQUk7WUFDSixlQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDL0MsZUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ2xELENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELDBCQUFPLEdBQVA7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFDLGVBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBM0JGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBQyxNQUFNO1lBQ2YsV0FBVyxFQUFDLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUMsQ0FBQywwQkFBVyxDQUFDO1NBQ3ZCLENBQUM7O2dCQUFBO0lBd0JGLGVBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGdCQUFRLFdBcUJwQixDQUFBIn0=