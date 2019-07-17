import { NgModule } from '@angular/core';
import { NgxWeekDaySelectorComponent } from './ngx-week-day-selector.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [NgxWeekDaySelectorComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgbModule
  ],
  exports: [NgxWeekDaySelectorComponent]
})
export class NgxWeekDaySelectorModule { }
