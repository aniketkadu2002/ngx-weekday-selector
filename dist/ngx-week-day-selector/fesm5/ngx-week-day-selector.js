import { ɵɵdefineInjectable, Injectable, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { __values } from 'tslib';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWeekDaySelectorService = /** @class */ (function () {
    function NgxWeekDaySelectorService() {
    }
    NgxWeekDaySelectorService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxWeekDaySelectorService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxWeekDaySelectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxWeekDaySelectorService_Factory() { return new NgxWeekDaySelectorService(); }, token: NgxWeekDaySelectorService, providedIn: "root" });
    return NgxWeekDaySelectorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            for (var _c = __values(this.weekdays), _d = _c.next(); !_d.done; _d = _c.next()) {
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
                for (var _e = __values(this.defaultSelection), _f = _e.next(); !_f.done; _f = _e.next()) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxWeekDaySelectorModule = /** @class */ (function () {
    function NgxWeekDaySelectorModule() {
    }
    NgxWeekDaySelectorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxWeekDaySelectorComponent],
                    imports: [
                        FormsModule,
                        CommonModule,
                        NgbModule
                    ],
                    exports: [NgxWeekDaySelectorComponent]
                },] }
    ];
    return NgxWeekDaySelectorModule;
}());

export { NgxWeekDaySelectorComponent, NgxWeekDaySelectorModule, NgxWeekDaySelectorService };
//# sourceMappingURL=ngx-week-day-selector.js.map
