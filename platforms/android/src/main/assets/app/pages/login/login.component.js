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
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var config_1 = require("../../shared/config");
"use strict";
var LoginPage = (function () {
    function LoginPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        // Harcoded values to avoid typing them
        this.user.username = "stan";
        this.user.password = "stan";
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function (data) {
            config_1.Config.access_token = data.json().access_token;
            config_1.Config.refresh_token = data.json().refresh_token;
            _this._userService.isConnected = true;
            _this._router.navigate(['Home']);
            console.log(config_1.Config.access_token);
        }, function (error) { return alert("Mauvaise combinaison nom d'utilisateur/mot de passe"); });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "pages/login/login.html",
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsdUJBQXFCLHFCQUFxQixDQUFDLENBQUE7QUFFM0MsWUFBWSxDQUFDO0FBTWI7SUFHSSxtQkFDWSxPQUFlLEVBQ2YsWUFBeUI7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2Qix1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQ04sVUFBQyxJQUFJO1lBQ0QsZUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9DLGVBQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNqRCxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLENBQUMsRUFDRCxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxFQUE1RCxDQUE0RCxDQUN0RSxDQUFDO0lBQ1YsQ0FBQztJQS9CTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzs7aUJBQUE7SUE2QkYsZ0JBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLGlCQUFTLFlBNEJyQixDQUFBIn0=