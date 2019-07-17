import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxWeekDaySelectorModule } from 'projects/ngx-week-day-selector/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWeekDaySelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
