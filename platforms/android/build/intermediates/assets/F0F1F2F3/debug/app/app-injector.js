"use strict";
var appInjectorRef;
exports.appInjector = function (injector) {
    if (injector === void 0) { injector = false; }
    if (!injector) {
        return appInjectorRef;
    }
    appInjectorRef = injector;
    return appInjectorRef;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluamVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQUksY0FBYyxDQUFDO0FBRU4sbUJBQVcsR0FBTyxVQUFDLFFBQWdCO0lBQWhCLHdCQUFnQixHQUFoQixnQkFBZ0I7SUFDNUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUUxQixNQUFNLENBQUMsY0FBYyxDQUFDO0FBQzFCLENBQUMsQ0FBQyJ9