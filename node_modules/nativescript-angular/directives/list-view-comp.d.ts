import { ElementRef, TemplateRef, AppViewManager, EmbeddedViewRef, IterableDiffers, ChangeDetectorRef, EventEmitter } from 'angular2/core';
export interface SetupItemViewArgs {
    view: EmbeddedViewRef;
    data: any;
    index: number;
}
export declare class ListViewComponent {
    private _elementRef;
    private _iterableDiffers;
    private _cdr;
    private _appViewManager;
    private listView;
    private _items;
    private _differ;
    loader: ElementRef;
    setupItemView: EventEmitter<SetupItemViewArgs>;
    itemTemplate: TemplateRef;
    items: any;
    private timerId;
    private doCheckDelay;
    constructor(_elementRef: ElementRef, _iterableDiffers: IterableDiffers, _cdr: ChangeDetectorRef, _appViewManager: AppViewManager);
    onItemLoading(args: any): void;
    setupViewRef(viewRef: EmbeddedViewRef, data: any, index: number): void;
    ngDoCheck(): void;
}
