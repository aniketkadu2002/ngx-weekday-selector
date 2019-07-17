import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-week-day-selector',
  templateUrl: './ngx-week-day-selector.component.html',
  styleUrls: ['./ngx-week-day-selector.component.css']
})
export class NgxWeekDaySelectorComponent implements OnInit {

  @Input() weekdays: string[] = [];
  @Input() defaultSelection: string[] = [];
  @Input() size: string = "sm";
  @Output() onDaySelected = new EventEmitter<string[]>();

  private daysCollection: Map<string, boolean> = new Map<string, boolean>();

  constructor() {}

  ngOnInit() {

    for( const day of this.weekdays){
      this.daysCollection.set(day, false);
    }

    if(this.defaultSelection) {
      for( const day of this.defaultSelection) {
        this.daysCollection.set(day, true);
      }
    }

    this.onDaySelected.emit([]);
  }

  getSize(): string {
    return "btn-" + this.size;
  }

  onClick($event: Event, day:string) {
    console.log(day);
    $event.preventDefault();
    $event.stopPropagation();
    this.selectDay(day);

    const selectedDays = this.getSelectedDay();
    this.onDaySelected.emit(selectedDays);
  }

  isSelected(day: string) {
    return this.daysCollection.get(day);
  }

  selectDay(day: string) {
    if (this.daysCollection.get(day)) {
      this.daysCollection.set(day, false);
    } else {
      this.daysCollection.set(day, true);
    }
  }

  getSelectedDay() {
    const selected = <string[]>[];

    Array.from(this.daysCollection.entries(), (v: [ string, boolean ]) => {
      if (v[ '1' ]) {
        selected.push(v[ '0' ]);
      }
    });

    return selected;
  }

}
