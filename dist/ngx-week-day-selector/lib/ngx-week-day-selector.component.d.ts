import { EventEmitter, OnInit } from '@angular/core';
export declare class NgxWeekDaySelectorComponent implements OnInit {
    weekdays: string[];
    defaultSelection: string[];
    size: string;
    onDaySelected: EventEmitter<string[]>;
    private daysCollection;
    constructor();
    ngOnInit(): void;
    getSize(): string;
    onClick($event: Event, day: string): void;
    isSelected(day: string): boolean;
    selectDay(day: string): void;
    getSelectedDay(): string[];
}
