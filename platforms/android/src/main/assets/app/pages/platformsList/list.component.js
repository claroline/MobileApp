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
var router_1 = require('@angular/router');
var config_service_1 = require("../../shared/config.service");
// @CanActivate((next, prev) => {
//   let injector = appInjector();
//   let router = injector.get(Router);
// 	let config = injector.get(ConfigService);
//   let userService = injector.get(UserService);
//
//   userService.isTokenExpired();
//
//
//
//   if (config.hasKey("host") && config.isExpired()) {
//     router.navigate(['Login']);
//     return false;
//   } else if (config.hasKey("host") && !config.isExpired() ){
//     router.navigate(['Home']);
//     return false;
//   } else {
//     return true;
//   }
//
//
// })
var ListPage = (function () {
    function ListPage(_router, _configService) {
        this._router = _router;
        this._configService = _configService;
    }
    ListPage.prototype.goToLogin = function () {
        var _this = this;
        if (this.host === undefined) {
            alert("Vous avez oublié d'entrer l'url !");
        }
        else {
            this._configService.setHost(this.host);
            this._configService.getClientIdAndSecretFromHost()
                .subscribe(function (data) {
                _this._configService.setClientId(data.client_id);
                _this._configService.setClientSecret(data.client_secret);
                _this._router.navigate(['/login']);
            }, function (err) {
                alert("Entrez une url valide.");
            });
        }
    };
    ListPage = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: 'pages/platformsList/list.html',
            providers: [config_service_1.ConfigService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, config_service_1.ConfigService])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQWtDLGlCQUNsQyxDQUFDLENBRGtEO0FBQ25ELCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBSTFELGlDQUFpQztBQUNqQyxrQ0FBa0M7QUFDbEMsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3QyxpREFBaUQ7QUFDakQsRUFBRTtBQUNGLGtDQUFrQztBQUNsQyxFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7QUFDRix1REFBdUQ7QUFDdkQsa0NBQWtDO0FBQ2xDLG9CQUFvQjtBQUNwQiwrREFBK0Q7QUFDL0QsaUNBQWlDO0FBQ2pDLG9CQUFvQjtBQUNwQixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLE1BQU07QUFDTixFQUFFO0FBQ0YsRUFBRTtBQUNGLEtBQUs7QUFRTDtJQUtDLGtCQUFvQixPQUFjLEVBQVUsY0FBNkI7UUFBckQsWUFBTyxHQUFQLE9BQU8sQ0FBTztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO0lBQ3pFLENBQUM7SUFHRCw0QkFBUyxHQUFUO1FBQUEsaUJBY0M7UUFiQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDNUIsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsNEJBQTRCLEVBQUU7aUJBQ2pELFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ2QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRCxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNuQyxDQUFDLEVBQUUsVUFBQSxHQUFHO2dCQUNMLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztJQUNGLENBQUM7SUE5QkY7UUFBQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFDLE1BQU07WUFDZixXQUFXLEVBQUMsK0JBQStCO1lBQzNDLFNBQVMsRUFBQyxDQUFDLDhCQUFhLENBQUM7U0FDekIsQ0FBQzs7Z0JBQUE7SUE2QkYsZUFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksZ0JBQVEsV0EwQnBCLENBQUEifQ==