import { Parse5DomAdapter } from 'angular2/src/platform/server/parse5_adapter';
import { Type } from 'angular2/src/facade/lang';
export declare class NativeScriptDomAdapter extends Parse5DomAdapter {
    static makeCurrent(): void;
    getXHR(): Type;
    hasProperty(element: any, name: string): boolean;
}
