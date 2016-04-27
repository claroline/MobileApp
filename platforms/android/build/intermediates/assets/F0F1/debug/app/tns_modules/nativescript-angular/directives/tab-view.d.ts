import { ElementRef, TemplateRef, ViewContainerRef } from "angular2/core";
import { TabView } from "ui/tab-view";
export declare class TabViewDirective {
    private element;
    tabView: TabView;
    constructor(element: ElementRef);
}
export declare class TabViewItemDirective {
    private owner;
    private templateRef;
    private viewContainer;
    private item;
    constructor(owner: TabViewDirective, templateRef: TemplateRef, viewContainer: ViewContainerRef);
    config: any;
    ngOnInit(): void;
}
