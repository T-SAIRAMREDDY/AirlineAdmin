import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminserviceService } from './adminservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FlightsComponent } from './flights/flights.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FlightService } from './flight.service';
import { ScheduleService } from './schedule.service';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { ViewSchedulesComponent } from './view-schedules/view-schedules.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { UpdateScheduleComponent } from './update-schedule/update-schedule.component';
import { DeleteFlightsComponent } from './delete-flights/delete-flights.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

export const routes:Routes=[
  {path:"AdminLogin",component: AdminloginComponent},
  {path:"Flights",component: FlightsComponent},
  {path:"Schedules",component: SchedulesComponent},
  {path:"Flights/ViewFlights", component: ViewFlightsComponent},
  {path:"Flights/AddFlights", component: AddFlightComponent},
  {path:"Flights/UpdateFlights", component: UpdateFlightComponent},
  {path:"Flights/DeleteFlights", component: DeleteFlightsComponent},
  {path:"Schedules/ViewSchedules", component:ViewSchedulesComponent},
  {path:"Schedules/AddSchedule", component: AddScheduleComponent},
  {path:"Schedules/UpdateSchedule", component: UpdateScheduleComponent} ,
  {path:"Schedules/DeleteSchedule", component: DeleteScheduleComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    FlightsComponent,
    SchedulesComponent,
    ViewFlightsComponent,
    ViewSchedulesComponent,
    AddFlightComponent,
    AddScheduleComponent,
    UpdateFlightComponent,
    UpdateScheduleComponent,
    DeleteFlightsComponent,
    DeleteScheduleComponent,
    AdminHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [AdminserviceService, FlightService, ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
