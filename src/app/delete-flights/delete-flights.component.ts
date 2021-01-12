import { Component, OnInit } from '@angular/core';
import { Flight } from '../Models/Flight.Models';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-flights',
  templateUrl: './delete-flights.component.html',
  styleUrls: ['./delete-flights.component.css']
})
export class DeleteFlightsComponent implements OnInit {
  flights:any;
  flight:Flight;

  constructor(private flightService:FlightService, private router:Router) { 
    this.flight=new Flight();
    this.flightService.getAllFlightFromApi().subscribe(data=>{this.flights=data;})
  }

  findFlight(fid:any){
    var id=fid.value;
    console.log(fid);
    this.flights.forEach((element: Flight)=>{
      if(element.Flight_ID==id)
        this.flight=element;
    });
  }

  deleteFlightData()
  {
    this.flightService.deleteFlightFromApi(this.flight.Flight_ID).subscribe(msg=>
     console.log("called"));
     alert('Successfully updates status to deleted');
     this.router.navigate(["Flights"]);
  }
  ngOnInit(): void {
  }

}
