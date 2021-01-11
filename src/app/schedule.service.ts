
import{HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Schedule} from './Models/Schedule.Models';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http:HttpClient) { }
  public getAllScheduleFromApi(){
    return this.http.get("http://localhost:59565/api/tblFlight_Schedule");
}
public addScheduleFromApi(schedule:Schedule){
    return this.http.post("http://localhost:59565/api/tblFlight_Schedule",schedule);
}
public updateScheduleFromApi(id:number,schedule:Schedule){
    return this.http.put("http://localhost:59565/api/tblFlight_Schedule/"+id,schedule);
}
public getOneScheduleFromApi(id:number){
    return this.http.get("http://localhost:59565/api/tblFlight_Schedule/"+id);
}
public deleteScheduleFromApi(id:number){
  return this.http.delete("http://localhost:59565/api/tblFlight_Schedule/"+id);
}

}
