/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxWeekDaySelectorComponent = /** @class */ (function () {
    function NgxWeekDaySelectorComponent() {
        this.weekdays = [];
        this.defaultSelection = [];
        this.size = "sm";
        this.onDaySelected = new EventEmitter();
        this.daysCollection = new Map();
    }
    /**
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a, e_2, _b;
        try {
            for (var _c = tslib_1.__values(this.weekdays), _d = _c.next(); !_d.done; _d = _c.next()) {
                var day = _d.value;
                this.daysCollection.set(day, false);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (this.defaultSelection) {
            try {
                for (var _e = tslib_1.__values(this.defaultSelection), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var day = _f.value;
                    this.daysCollection.set(day, true);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.onDaySelected.emit([]);
    };
    /**
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.getSize = /**
     * @return {?}
     */
    function () {
        return "btn-" + this.size;
    };
    /**
     * @param {?} $event
     * @param {?} day
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.onClick = /**
     * @param {?} $event
     * @param {?} day
     * @return {?}
     */
    function ($event, day) {
        console.log(day);
        $event.preventDefault();
        $event.stopPropagation();
        this.selectDay(day);
        /** @type {?} */
        var selectedDays = this.getSelectedDay();
        this.onDaySelected.emit(selectedDays);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.isSelected = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        return this.daysCollection.get(day);
    };
    /**
     * @param {?} day
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.selectDay = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        if (this.daysCollection.get(day)) {
            this.daysCollection.set(day, false);
        }
        else {
            this.daysCollection.set(day, true);
        }
    };
    /**
     * @return {?}
     */
    NgxWeekDaySelectorComponent.prototype.getSelectedDay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selected = (/** @type {?} */ ([]));
        Array.from(this.daysCollection.entries(), (/**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v['1']) {
                selected.push(v['0']);
            }
        }));
        return selected;
    };
    NgxWeekDaySelectorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-week-day-selector',
                    template: "<div class=\"btn-group btn-group-toggle\" style=\"background-color:#999\">\n    <label  *ngFor=\"let day of weekdays\" class=\"btn-primary\" ngbButtonLabel>\n      <div [ngClass]=\"getSize()\" >\n        <input type=\"checkbox\"  (click)=\"onClick($event, day)\" [ngModel]=\"isSelected(day)\" ngbButton> {{day}}\n      </div>\n      </label>\n</div>\n\n",
                    styles: [":host ::ng-deep .btn-primary{background-color:#999;border-color:#999}"]
                }] }
    ];
    /** @nocollapse */
    NgxWeekDaySelectorComponent.ctorParameters = function () { return []; };
    NgxWeekDaySelectorComponent.propDecorators = {
        weekdays: [{ type: Input }],
        defaultSelection: [{ type: Input }],
        size: [{ type: Input }],
        onDaySelected: [{ type: Output }]
    };
    return NgxWeekDaySelectorComponent;
}());
export { NgxWeekDaySelectorComponent };
if (false) {
    /** @type {?} */
    NgxWeekDaySelectorComponent.prototype.weekdays;
    /** @type {?} */
    NgxWeekDaySelectorComponent.prototype.defaultSelection;
    /** @type {?} */
    NgxWeekDaySelectorComponent.prototype.size;
    /** @type {?} */
    NgxWeekDaySelectorComponent.prototype.onDaySelected;
    /**
     * @type {?}
     * @private
     */
    NgxWeekDaySelectorComponent.prototype.daysCollection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdlZWstZGF5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWVrLWRheS1zZWxlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtd2Vlay1kYXktc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWNFO1FBUFMsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNuQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFZLENBQUM7UUFFL0MsbUJBQWMsR0FBeUIsSUFBSSxHQUFHLEVBQW1CLENBQUM7SUFFM0QsQ0FBQzs7OztJQUVoQiw4Q0FBUTs7O0lBQVI7OztZQUVFLEtBQWtCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFBLGdCQUFBLDRCQUFDO2dCQUEzQixJQUFNLEdBQUcsV0FBQTtnQkFDWixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckM7Ozs7Ozs7OztRQUVELElBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOztnQkFDeEIsS0FBa0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBcEMsSUFBTSxHQUFHLFdBQUE7b0JBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNwQzs7Ozs7Ozs7O1NBQ0Y7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsNkNBQU87OztJQUFQO1FBQ0UsT0FBTyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFFRCw2Q0FBTzs7Ozs7SUFBUCxVQUFRLE1BQWEsRUFBRSxHQUFVO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVkLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsZ0RBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELCtDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDOzs7O0lBRUQsb0RBQWM7OztJQUFkOztZQUNRLFFBQVEsR0FBRyxtQkFBVSxFQUFFLEVBQUE7UUFFN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTs7OztRQUFFLFVBQUMsQ0FBc0I7WUFDL0QsSUFBSSxDQUFDLENBQUUsR0FBRyxDQUFFLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyw2V0FBcUQ7O2lCQUV0RDs7Ozs7MkJBR0UsS0FBSzttQ0FDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsTUFBTTs7SUEyRFQsa0NBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWhFWSwyQkFBMkI7OztJQUV0QywrQ0FBaUM7O0lBQ2pDLHVEQUF5Qzs7SUFDekMsMkNBQTZCOztJQUM3QixvREFBdUQ7Ozs7O0lBRXZELHFEQUEwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXdlZWstZGF5LXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC13ZWVrLWRheS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25neC13ZWVrLWRheS1zZWxlY3Rvci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmd4V2Vla0RheVNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSB3ZWVrZGF5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgZGVmYXVsdFNlbGVjdGlvbjogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nID0gXCJzbVwiO1xuICBAT3V0cHV0KCkgb25EYXlTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgcHJpdmF0ZSBkYXlzQ29sbGVjdGlvbjogTWFwPHN0cmluZywgYm9vbGVhbj4gPSBuZXcgTWFwPHN0cmluZywgYm9vbGVhbj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBmb3IoIGNvbnN0IGRheSBvZiB0aGlzLndlZWtkYXlzKXtcbiAgICAgIHRoaXMuZGF5c0NvbGxlY3Rpb24uc2V0KGRheSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGVmYXVsdFNlbGVjdGlvbikge1xuICAgICAgZm9yKCBjb25zdCBkYXkgb2YgdGhpcy5kZWZhdWx0U2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuZGF5c0NvbGxlY3Rpb24uc2V0KGRheSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vbkRheVNlbGVjdGVkLmVtaXQoW10pO1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImJ0bi1cIiArIHRoaXMuc2l6ZTtcbiAgfVxuXG4gIG9uQ2xpY2soJGV2ZW50OiBFdmVudCwgZGF5OnN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKGRheSk7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0RGF5KGRheSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZERheXMgPSB0aGlzLmdldFNlbGVjdGVkRGF5KCk7XG4gICAgdGhpcy5vbkRheVNlbGVjdGVkLmVtaXQoc2VsZWN0ZWREYXlzKTtcbiAgfVxuXG4gIGlzU2VsZWN0ZWQoZGF5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5kYXlzQ29sbGVjdGlvbi5nZXQoZGF5KTtcbiAgfVxuXG4gIHNlbGVjdERheShkYXk6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmRheXNDb2xsZWN0aW9uLmdldChkYXkpKSB7XG4gICAgICB0aGlzLmRheXNDb2xsZWN0aW9uLnNldChkYXksIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXlzQ29sbGVjdGlvbi5zZXQoZGF5LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3RlZERheSgpIHtcbiAgICBjb25zdCBzZWxlY3RlZCA9IDxzdHJpbmdbXT5bXTtcblxuICAgIEFycmF5LmZyb20odGhpcy5kYXlzQ29sbGVjdGlvbi5lbnRyaWVzKCksICh2OiBbIHN0cmluZywgYm9vbGVhbiBdKSA9PiB7XG4gICAgICBpZiAodlsgJzEnIF0pIHtcbiAgICAgICAgc2VsZWN0ZWQucHVzaCh2WyAnMCcgXSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxufVxuIl19