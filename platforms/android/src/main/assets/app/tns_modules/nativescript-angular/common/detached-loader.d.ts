import { DynamicComponentLoader, ComponentRef, ElementRef, Type } from 'angular2/core';
/**
 * Wrapper component used for loading compnenets when navigating
 * It uses DetachedContainer as selector so that it is elementRef is not attached to the visual tree.
 */
export declare class DetachedLoader {
    private element;
    private loader;
    constructor(element: ElementRef, loader: DynamicComponentLoader);
    loadComponent(componentType: Type): Promise<ComponentRef>;
}
