import "reflect-metadata";
import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";

import {LoginPage} from "./pages/login/login.component";
import {HomePage} from './pages/home/home.component';

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: `
	
    <StackLayout>
    	<page-router-outlet>
    		
    	</page-router-outlet>
    </StackLayout>
	
    `
})
@RouteConfig([
    { path: "/login", component: LoginPage, as: "Login", useAsDefault: true},
    { path: "/home", component: HomePage, as: "Home" }
])
export class AppComponent {
	
}
