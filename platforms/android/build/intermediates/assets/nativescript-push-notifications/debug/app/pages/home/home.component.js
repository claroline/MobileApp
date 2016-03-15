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
var HomePage = (function () {
    function HomePage(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    HomePage.prototype.ngOnInit = function () {
        this._userService.getNotifications()
            .then(function (data) { return console.log("Notifications : " + JSON.stringify(data)); }, function (error) { return console.error("Erreur :  " + error); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsdUJBQXFCLGlCQUFpQixDQUFDLENBQUE7QUFDdkMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFZM0Q7SUFXQyxrQkFDUyxZQUF5QixFQUN6QixPQUFlO1FBRGYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUV4QixDQUFDO0lBWkQsMkJBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7YUFDbEMsSUFBSSxDQUNGLFVBQUEsSUFBSSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXRELENBQXNELEVBQy9ELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEVBQW5DLENBQW1DLENBQzFDLENBQUM7SUFDUixDQUFDO0lBaEJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN4QixDQUFDOztnQkFBQTtJQXFCRixlQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSxnQkFBUSxXQWtCcEIsQ0FBQSJ9