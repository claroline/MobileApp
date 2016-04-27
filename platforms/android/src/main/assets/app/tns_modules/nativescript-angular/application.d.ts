import 'globals';
import "zone.js/dist/zone-node";
import 'reflect-metadata';
import './polyfills/array';
import { Type } from 'angular2/src/facade/lang';
import { ComponentRef } from 'angular2/core';
import { Provider } from 'angular2/src/core/di';
export declare type ProviderArray = Array<Type | Provider | any[]>;
export interface AppOptions {
    cssFile?: string;
    startPageActionBarHidden?: boolean;
}
export declare function bootstrap(appComponentType: any, customProviders?: ProviderArray): Promise<ComponentRef>;
export declare function nativeScriptBootstrap(appComponentType: any, customProviders?: ProviderArray, appOptions?: AppOptions): Promise<ComponentRef>;
