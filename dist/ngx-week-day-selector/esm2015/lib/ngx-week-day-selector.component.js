/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxWeekDaySelectorComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdlZWstZGF5LXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13ZWVrLWRheS1zZWxlY3Rvci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtd2Vlay1kYXktc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTywyQkFBMkI7SUFTdEM7UUFQUyxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLHFCQUFnQixHQUFhLEVBQUUsQ0FBQztRQUNoQyxTQUFJLEdBQVcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUUvQyxtQkFBYyxHQUF5QixJQUFJLEdBQUcsRUFBbUIsQ0FBQztJQUUzRCxDQUFDOzs7O0lBRWhCLFFBQVE7UUFFTixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUM7WUFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JDO1FBRUQsSUFBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxNQUFhLEVBQUUsR0FBVTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Y0FFZCxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7O2NBQ04sUUFBUSxHQUFHLG1CQUFVLEVBQUUsRUFBQTtRQUU3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFOzs7O1FBQUUsQ0FBQyxDQUFzQixFQUFFLEVBQUU7WUFDbkUsSUFBSSxDQUFDLENBQUUsR0FBRyxDQUFFLEVBQUU7Z0JBQ1osUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUUsR0FBRyxDQUFFLENBQUMsQ0FBQzthQUN6QjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyw2V0FBcUQ7O2FBRXREOzs7Ozt1QkFHRSxLQUFLOytCQUNMLEtBQUs7bUJBQ0wsS0FBSzs0QkFDTCxNQUFNOzs7O0lBSFAsK0NBQWlDOztJQUNqQyx1REFBeUM7O0lBQ3pDLDJDQUE2Qjs7SUFDN0Isb0RBQXVEOzs7OztJQUV2RCxxREFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC13ZWVrLWRheS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtd2Vlay1kYXktc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtd2Vlay1kYXktc2VsZWN0b3IuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neFdlZWtEYXlTZWxlY3RvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgd2Vla2RheXM6IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIGRlZmF1bHRTZWxlY3Rpb246IHN0cmluZ1tdID0gW107XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZyA9IFwic21cIjtcbiAgQE91dHB1dCgpIG9uRGF5U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIHByaXZhdGUgZGF5c0NvbGxlY3Rpb246IE1hcDxzdHJpbmcsIGJvb2xlYW4+ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgZm9yKCBjb25zdCBkYXkgb2YgdGhpcy53ZWVrZGF5cyl7XG4gICAgICB0aGlzLmRheXNDb2xsZWN0aW9uLnNldChkYXksIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmRlZmF1bHRTZWxlY3Rpb24pIHtcbiAgICAgIGZvciggY29uc3QgZGF5IG9mIHRoaXMuZGVmYXVsdFNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmRheXNDb2xsZWN0aW9uLnNldChkYXksIHRydWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub25EYXlTZWxlY3RlZC5lbWl0KFtdKTtcbiAgfVxuXG4gIGdldFNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJidG4tXCIgKyB0aGlzLnNpemU7XG4gIH1cblxuICBvbkNsaWNrKCRldmVudDogRXZlbnQsIGRheTpzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZyhkYXkpO1xuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnNlbGVjdERheShkYXkpO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWREYXlzID0gdGhpcy5nZXRTZWxlY3RlZERheSgpO1xuICAgIHRoaXMub25EYXlTZWxlY3RlZC5lbWl0KHNlbGVjdGVkRGF5cyk7XG4gIH1cblxuICBpc1NlbGVjdGVkKGRheTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF5c0NvbGxlY3Rpb24uZ2V0KGRheSk7XG4gIH1cblxuICBzZWxlY3REYXkoZGF5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5kYXlzQ29sbGVjdGlvbi5nZXQoZGF5KSkge1xuICAgICAgdGhpcy5kYXlzQ29sbGVjdGlvbi5zZXQoZGF5LCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGF5c0NvbGxlY3Rpb24uc2V0KGRheSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZWN0ZWREYXkoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSA8c3RyaW5nW10+W107XG5cbiAgICBBcnJheS5mcm9tKHRoaXMuZGF5c0NvbGxlY3Rpb24uZW50cmllcygpLCAodjogWyBzdHJpbmcsIGJvb2xlYW4gXSkgPT4ge1xuICAgICAgaWYgKHZbICcxJyBdKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2godlsgJzAnIF0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlbGVjdGVkO1xuICB9XG5cbn1cbiJdfQ==