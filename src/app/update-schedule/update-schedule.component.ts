import { Component, OnInit } from '@angular/core';
import { Schedule } from '../Models/Schedule.Models';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-schedule',
  templateUrl: './update-schedule.component.html',
  styleUrls: ['./update-schedule.component.css']
})
export class UpdateScheduleComponent implements OnInit {

  schedules:any;
  schedule:Schedule;
  constructor(private scheduleService:ScheduleService,private router:Router) { 
    this.schedule=new Schedule();
    this.scheduleService.getAllScheduleFromApi().subscribe(data=>{this.schedules=data;})
  }

  findSchedule(sid:any){
    var id=sid.value;
    console.log(sid);
    this.schedules.forEach((element: Schedule)=>{
      if(element.Schedule_ID==id)
        this.schedule=element;
    });
  }
    updateScheduleData()
   {
     this.scheduleService.updateScheduleFromApi(this.schedule.Schedule_ID,this.schedule).subscribe(msg=>
      console.log("called"));
      alert('Updated Schedule Status');
      this.router.navigate(["Schedules"]);
   }
  
  ngOnInit(): void {
  }

}
