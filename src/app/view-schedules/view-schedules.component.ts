import { Component, OnInit } from '@angular/core';
import{ScheduleService} from '../schedule.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-view-schedules',
  templateUrl: './view-schedules.component.html',
  styleUrls: ['./view-schedules.component.css']
})
export class ViewSchedulesComponent implements OnInit {
  schedules:any;
  constructor(private scheduleService:ScheduleService,private router:Router) { 
    this.scheduleService.getAllScheduleFromApi().subscribe(s=>{this.schedules=s;})
  }

  ngOnInit(): void {
  }

}
