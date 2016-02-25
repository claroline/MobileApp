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
require("reflect-metadata");
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var router_2 = require("nativescript-angular/router");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_2.NS_ROUTER_DIRECTIVES],
            template: "\n\t\n    <StackLayout>\n    \t<page-router-outlet>\n    \t\t\n    \t</page-router-outlet>\n    </StackLayout>\n\t\n    "
        }),
        router_1.RouteConfig([
            { path: "/", component: login_component_1.LoginPage, as: "Login" },
            { path: "/List", component: list_component_1.ListPage, as: "List" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLFFBQU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQTBCLGlCQUFpQixDQUFDLENBQUE7QUFDNUMsdUJBQW1DLDZCQUE2QixDQUFDLENBQUE7QUFFakUsZ0NBQXdCLCtCQUErQixDQUFDLENBQUE7QUFDeEQsK0JBQXVCLDZCQUE2QixDQUFDLENBQUE7QUFtQnJEO0lBQUE7SUFFQSxDQUFDO0lBbkJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLDZCQUFvQixDQUFDO1lBQ2xDLFFBQVEsRUFBRSwwSEFRVDtTQUNKLENBQUM7UUFDRCxvQkFBVyxDQUFDO1lBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSwyQkFBUyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUU7WUFDaEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7U0FDckQsQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0JBQVksZUFFeEIsQ0FBQSJ9