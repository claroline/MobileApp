"use strict";
var router_1 = require('nativescript-angular/router');
var login_component_1 = require("./pages/login/login.component");
var home_component_1 = require('./pages/home/home.component');
var list_component_1 = require('./pages/platformsList/list.component');
var routes = [
    { path: "login", component: login_component_1.LoginPage },
    { path: "home", component: home_component_1.HomePage },
    { path: "", component: list_component_1.ListPage }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHVCQUE4Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBRTVELGdDQUF3QiwrQkFBK0IsQ0FBQyxDQUFBO0FBQ3hELCtCQUF1Qiw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3JELCtCQUF1QixzQ0FBc0MsQ0FBQyxDQUFBO0FBRTlELElBQU0sTUFBTSxHQUFpQjtJQUN6QixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDJCQUFTLEVBQUM7SUFDdEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFDO0lBQ3BDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUseUJBQVEsRUFBQztDQUNuQyxDQUFDO0FBRVcsNEJBQW9CLEdBQUc7SUFDaEMsd0JBQWUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7Q0FDcEQsQ0FBQyJ9