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
var config_service_1 = require("../../shared/config.service");
var ListPage = (function () {
    function ListPage(_router, _configService) {
        this._router = _router;
        this._configService = _configService;
    }
    ListPage.prototype.goToLogin = function () {
        var _this = this;
        this._configService.setHost(this.host);
        this._configService.getClientIdAndSecretFromHost()
            .subscribe(function (data) {
            _this._configService.setClientId(data.client_id);
            _this._configService.setClientSecret(data.client_secret);
            _this._router.navigate(['Login']);
        }, function (err) {
            alert("L'url que vous avez entrée n'est pas valide !");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLCtCQUE0Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBUTFEO0lBS0Msa0JBQW9CLE9BQWMsRUFBVSxjQUE2QjtRQUFyRCxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7SUFFekUsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFBQSxpQkFhQztRQVhBLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLDRCQUE0QixFQUFFO2FBQ2hELFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUUsVUFBQSxHQUFHO1lBQ0wsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7SUFHTCxDQUFDO0lBNUJGO1FBQUMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBQyxNQUFNO1lBQ2YsV0FBVyxFQUFDLCtCQUErQjtZQUMzQyxTQUFTLEVBQUMsQ0FBQyw4QkFBYSxDQUFDO1NBQ3pCLENBQUM7O2dCQUFBO0lBeUJGLGVBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGdCQUFRLFdBdUJwQixDQUFBIn0=