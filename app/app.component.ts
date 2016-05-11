import "reflect-metadata";
import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import {LoginPage} from "./pages/login/login.component";
import {HomePage} from './pages/home/home.component';
import {ListPage} from './pages/platformsList/list.component';

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
    	<page-router-outlet>

    	</page-router-outlet>

    `
})

@RouteConfig([
    { path: "/login", component: LoginPage, as: "Login"},
    { path: "/home", component: HomePage, as: "Home" },
    { path: "/", component: ListPage, as: "List", useAsDefault: true }
])
export class AppComponent {

}
