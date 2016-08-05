
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {HTTP_PROVIDERS} from "@angular/http";


import {ConfigService} from "./shared/config.service";
import {UserService} from "./shared/user/user.service";
import "./livesync-patch";
import {appInjector} from "./app-injector";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {AppComponent} from "./app.component";
import { SIDEDRAWER_PROVIDERS } from "nativescript-telerik-ui/sidedrawer/angular";





nativeScriptBootstrap(AppComponent, [UserService,ConfigService,HTTP_PROVIDERS, SIDEDRAWER_PROVIDERS, APP_ROUTER_PROVIDERS])
.then((appRef) => appInjector(appRef.injector));
