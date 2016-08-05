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
var router_1 = require("@angular/router");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var config_service_1 = require("../../shared/config.service");
"use strict";
var LoginPage = (function () {
    function LoginPage(_router, _userService, _configService) {
        this._router = _router;
        this._userService = _userService;
        this._configService = _configService;
        this.user = new user_1.User();
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function (data) {
            _this._configService.setAccessToken(data.json().access_token);
            _this._configService.setRefreshToken(data.json().refresh_token);
            _this._router.navigate(['/home']);
            _this._configService.expire(false);
            console.log(_this._configService.getAccessToken());
        }, function (error) { return alert("Mauvaise combinaison nom d'utilisateur/mot de passe"); });
    };
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "pages/login/login.html",
            providers: [user_service_1.UserService, config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, config_service_1.ConfigService])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0QsK0JBQTRCLDZCQUE2QixDQUFDLENBQUE7QUFJMUQsWUFBWSxDQUFDO0FBUWI7SUFHSSxtQkFDWSxPQUFlLEVBQ2YsWUFBeUIsRUFDekIsY0FBNkI7UUFGN0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBR3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUkzQixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUFBLGlCQWVDO1FBZE0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQyxTQUFTLENBQ04sVUFBQyxJQUFJO1lBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzdELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFbEQsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLEVBQTVELENBQTRELENBQzFFLENBQUM7SUFHVixDQUFDO0lBckNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBYSxDQUFDO1NBQzFDLENBQUM7O2lCQUFBO0lBcUNGLGdCQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQztBQWxDWSxpQkFBUyxZQWtDckIsQ0FBQSJ9