import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';

import {LoginPage} from "./pages/login/login.component";
import {HomePage} from './pages/home/home.component';
import {ListPage} from './pages/platformsList/list.component';

const routes: RouterConfig = [
    { path: "/login", component: LoginPage},
    { path: "/home", component: HomePage},
    { path: "/", component: ListPage}
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, { enableTracing: false })
];
