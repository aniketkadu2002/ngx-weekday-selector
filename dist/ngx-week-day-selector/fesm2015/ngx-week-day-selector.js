import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxWeekDaySelectorService {
    constructor() { }
}
NgxWeekDaySelectorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxWeekDaySelectorService.ctorParameters = () => [];
/** @nocollapse */ NgxWeekDaySelectorService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxWeekDaySelectorService_Factory() { return new NgxWeekDaySelectorService(); }, token: NgxWeekDaySelectorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxWeekDaySelectorComponent {
    constructor() {
        this.weekdays = [];
        this.defaultSelection = [];
        this.size = "sm";
        this.onDaySelected = new EventEmitter();
        this.daysCollection = new Map();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        for (const day of this.weekdays) {
            this.daysCollection.set(day, false);
        }
        if (this.defaultSelection) {
            for (const day of this.defaultSelection) {
                this.daysCollection.set(day, true);
            }
        }
        this.onDaySelected.emit([]);
    }
    /**
     * @return {?}
     */
    getSize() {
        return "btn-" + this.size;
    }
    /**
     * @param {?} $event
     * @param {?} day
     * @return {?}
     */
    onClick($event, day) {
        console.log(day);
        $event.preventDefault();
        $event.stopPropagation();
        this.selectDay(day);
        /** @type {?} */
        const selectedDays = this.getSelectedDay();
        this.onDaySelected.emit(selectedDays);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    isSelected(day) {
        return this.daysCollection.get(day);
    }
    /**
     * @param {?} day
     * @return {?}
     */
    selectDay(day) {
        if (this.daysCollection.get(day)) {
            this.daysCollection.set(day, false);
        }
        else {
            this.daysCollection.set(day, true);
        }
    }
    /**
     * @return {?}
     */
    getSelectedDay() {
        /** @type {?} */
        const selected = (/** @type {?} */ ([]));
        Array.from(this.daysCollection.entries(), (/**
         * @param {?} v
         * @return {?}
         */
        (v) => {
            if (v['1']) {
                selected.push(v['0']);
            }
        }));
        return selected;
    }
}
NgxWeekDaySelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-week-day-selector',
                template: "<div class=\"btn-group btn-group-toggle\" style=\"background-color:#999\">\n    <label  *ngFor=\"let day of weekdays\" class=\"btn-primary\" ngbButtonLabel>\n      <div [ngClass]=\"getSize()\" >\n        <input type=\"checkbox\"  (click)=\"onClick($event, day)\" [ngModel]=\"isSelected(day)\" ngbButton> {{day}}\n      </div>\n      </label>\n</div>\n\n",
                styles: [":host ::ng-deep .btn-primary{background-color:#999;border-color:#999}"]
            }] }
];
/** @nocollapse */
NgxWeekDaySelectorComponent.ctorParameters = () => [];
NgxWeekDaySelectorComponent.propDecorators = {
    weekdays: [{ type: Input }],
    defaultSelection: [{ type: Input }],
    size: [{ type: Input }],
    onDaySelected: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxWeekDaySelectorModule {
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

export { NgxWeekDaySelectorComponent, NgxWeekDaySelectorModule, NgxWeekDaySelectorService };
//# sourceMappingURL=ngx-week-day-selector.js.map
