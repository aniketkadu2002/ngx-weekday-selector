import { Component } from '@angular/core';

@Component({
  selector: 'ngx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgxWeekDaySelectorLibrary';

  daysOfTheWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  default: string[] = [
    'Monday'
  ]

  onSelection(days:string[]){
    console.log(days);
  }
}
