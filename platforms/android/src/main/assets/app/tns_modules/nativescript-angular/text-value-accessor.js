var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var control_value_accessor_1 = require('angular2/src/common/forms/directives/control_value_accessor');
var lang_1 = require('angular2/src/facade/lang');
var TEXT_VALUE_ACCESSOR = lang_1.CONST_EXPR(new core_1.Provider(control_value_accessor_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return TextValueAccessor; }), multi: true }));
/**
 * The accessor for writing a text and listening to changes that is used by the
 * {@link NgModel}, {@link NgFormControl}, and {@link NgControlName} directives.
 *
 *  ### Example
 *  ```
 *  <TextField [(ngModel)]='model.test'>
 *  ```
 */
var TextValueAccessor = (function () {
    function TextValueAccessor(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    TextValueAccessor.prototype.writeValue = function (value) {
        var normalizedValue = lang_1.isBlank(value) ? '' : value;
        this._renderer.setElementProperty(this._elementRef.nativeElement, 'text', normalizedValue);
    };
    TextValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    TextValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    TextValueAccessor = __decorate([
        core_1.Directive({
            selector: 'TextField[ngModel]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngControl],[ngModel],[ngFormControl]',
            host: { '(textChange)': 'onChange($event.value)' },
            bindings: [TEXT_VALUE_ACCESSOR]
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
    ], TextValueAccessor);
    return TextValueAccessor;
})();
exports.TextValueAccessor = TextValueAccessor;
//# sourceMappingURL=text-value-accessor.js.map