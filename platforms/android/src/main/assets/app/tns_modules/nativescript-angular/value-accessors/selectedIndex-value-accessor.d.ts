import { ElementRef } from 'angular2/core';
import { BaseValueAccessor } from './base-value-accessor';
import { View } from "ui/core/view";
export declare type SelectableView = {
    selectedIndex: number;
} & View;
/**
 * The accessor for setting a selectedIndex and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <SegmentedBar [(ngModel)]='model.test'>
 *  ```
 */
export declare class SelectedIndexValueAccessor extends BaseValueAccessor<SelectableView> {
    onTouched: () => void;
    constructor(elementRef: ElementRef);
    writeValue(value: any): void;
    registerOnTouched(fn: () => void): void;
}
