import { Component, OnInit } from '@angular/core';
import { Schedule } from '../Models/Schedule.Models';
import { ScheduleService } from '../schedule.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.css']
})
export class DeleteScheduleComponent implements OnInit {
  schedules: any;
  schedule: Schedule;

  constructor(private scheduleService: ScheduleService, private router: Router) {
    this.schedule = new Schedule();
    this.scheduleService.getAllScheduleFromApi().subscribe(data => { this.schedules = data; })

  }
  findSchedule(sid: any) {
    var id = sid.value;
    console.log(sid);
    this.schedules.forEach((element: Schedule) => {
      if (element.Schedule_ID == id)
        this.schedule = element;
    });
  }
  deleteScheduleData() {
    var currentDate = new Date();
    const cValue = formatDate(currentDate, 'yyyy-MM-dd','en-IN');
    if (this.schedule.Dep_Date < cValue) {
      alert('Cannot delete completed schedules!');
    } else {
      this.scheduleService.deleteScheduleFromApi(this.schedule.Schedule_ID).subscribe(msg =>
        console.log("called"));
      alert('Updated Schedule Status');
      this.router.navigate(["Schedules"]);
    }
  }

  ngOnInit(): void {
  }

}
