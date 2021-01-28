import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClockComponent } from './clock/clock.component';
import { WizardComponent } from './wizard/wizard.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'calendar', component: CalendarComponent, pathMatch: 'full'},
  { path: 'clock', component: ClockComponent, pathMatch: 'full'},
  { path: 'wizard', component: WizardComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
