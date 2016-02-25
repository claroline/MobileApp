"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var Observable_1 = require("rxjs/Observable");
var dialogsModule = require("ui/dialogs");
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListPage = (function () {
    function ListPage(_groceryListService, router) {
        var _this = this;
        this._groceryListService = _groceryListService;
        this.router = router;
        this.grocery = "";
        this.isLoading = true;
        // TODO: I have no idea what’s going on here
        this.groceryList = Observable_1.Observable.create(function (subscriber) {
            _this.subscr = subscriber;
            subscriber.next(_this.items);
        });
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this._groceryListService.load()
            .subscribe(function (groceryList) {
            _this.items = groceryList;
            _this.updateList();
        });
    };
    ListPage.prototype.add = function () {
        var _this = this;
        // Check for empty submissions
        var groceryTextField = frame_1.topmost().currentPage.getViewById("grocery");
        if (this.grocery.trim() === "") {
            dialogsModule.alert({
                message: "Enter a grocery item",
                okButtonText: "OK"
            });
            return;
        }
        // Dismiss the keyboard
        groceryTextField.dismissSoftInput();
        this._groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.items.push(groceryObject);
            _this.updateList();
            _this.grocery = "";
        }, function () {
            dialogsModule.alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    // TODO: Why is this a thing? Shouldn’t the list, like, update itself?
    ListPage.prototype.updateList = function () {
        this.subscr.next(observable_1.WrappedValue.wrap(this.items));
    };
    ListPage = __decorate([
        core_1.Component({
            selector: "list",
            templateUrl: "pages/list/list.html",
            // TODO: Why is this necessary?
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            providers: [grocery_list_service_1.GroceryListService]
        }), 
        __metadata('design:paramtypes', [grocery_list_service_1.GroceryListService, router_1.Router])
    ], ListPage);
    return ListPage;
}());
exports.ListPage = ListPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlELGVBQWUsQ0FBQyxDQUFBO0FBQ3pFLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLDJCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBRTNDLElBQVksYUFBYSxXQUFNLFlBQVksQ0FBQyxDQUFBO0FBRzVDLHNCQUFzQixVQUFVLENBQUMsQ0FBQTtBQUNqQywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUc3QyxxQ0FBaUMsMkNBQTJDLENBQUMsQ0FBQTtBQVM3RTtJQVFFLGtCQUNVLG1CQUF1QyxFQUN2QyxNQUFjO1FBVjFCLGlCQXlFQztRQWhFVyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsNENBQTRDO1FBQzVDLElBQUksQ0FBQyxXQUFXLEdBQUcsdUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVO1lBQzdDLEtBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1lBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUU7YUFDNUIsU0FBUyxDQUFDLFVBQUEsV0FBVztZQUNwQixLQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUN6QixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsc0JBQUcsR0FBSDtRQUFBLGlCQTZCQztRQTVCQyw4QkFBOEI7UUFDOUIsSUFBSSxnQkFBZ0IsR0FBYyxlQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixhQUFhLENBQUMsS0FBSyxDQUFDO2dCQUNsQixPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLGdCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3ZDLFNBQVMsQ0FDUixVQUFBLGFBQWE7WUFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsYUFBYSxDQUFDLEtBQUssQ0FBQztnQkFDbEIsT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLDZCQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx5QkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBdkVIO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsK0JBQStCO1lBQy9CLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFNBQVMsRUFBRSxDQUFDLHlDQUFrQixDQUFDO1NBQ2hDLENBQUM7O2dCQUFBO0lBMEVGLGVBQUM7QUFBRCxDQUFDLEFBekVELElBeUVDO0FBekVZLGdCQUFRLFdBeUVwQixDQUFBIn0=