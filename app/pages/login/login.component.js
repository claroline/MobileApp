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
var LoginPage = (function () {
    function LoginPage(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        // Hardcode a few values to make testing easy
        this.user.username = "stan";
        this.user.password = "stan";
    }
    LoginPage.prototype.signIn = function () {
        //this._router.navigate(["Home"]);
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () { return _this._router.navigate(["List"]); }, function (error) { return alert("Mauvais nom d'utilisateur et/ou mot de passe"); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFFdkMscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFPM0Q7SUFHRSxtQkFDVSxPQUFlLEVBQ2YsWUFBeUI7UUFEekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRWpDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUV2Qiw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNFLGtDQUFrQztRQURwQyxpQkFTQztRQU5DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDL0IsU0FBUyxDQUNSLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQS9CLENBQStCLEVBQ3JDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLEVBQXJELENBQXFELENBQ2pFLENBQUM7SUFFTixDQUFDO0lBNUJIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDOztpQkFBQTtJQTBCRixnQkFBQztBQUFELENBQUMsQUF6QkQsSUF5QkM7QUF6QlksaUJBQVMsWUF5QnJCLENBQUEifQ==