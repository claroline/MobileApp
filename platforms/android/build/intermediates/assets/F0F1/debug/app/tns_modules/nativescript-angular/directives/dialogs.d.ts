import { DynamicComponentLoader, ElementRef, Type } from 'angular2/core';
import { Page } from 'ui/page';
export interface ModalDialogOptions {
    context?: any;
    fullscreen?: boolean;
}
export declare class ModalDialogParams {
    context: any;
    closeCallback: (...args) => any;
    constructor(context: any, closeCallback: (...args) => any);
}
export declare class ModalDialogService {
    private page;
    private loader;
    private elementRef;
    constructor(page: Page, loader: DynamicComponentLoader);
    registerElementRef(ref: ElementRef): void;
    showModal(type: Type, options: ModalDialogOptions): Promise<any>;
}
export declare class ModalDialogHost {
    constructor(elementRef: ElementRef, modalService: ModalDialogService);
}
