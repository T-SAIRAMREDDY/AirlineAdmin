import { Component, OnInit } from '@angular/core';
import { Flight } from '../Models/Flight.Models';
import { FlightService } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  flight:Flight;
  constructor(private flightService:FlightService, private router:Router) { 
    this.flight=new Flight();
  }
  
  InsertFlight(){
    this.flightService.addFlightFromApi(this.flight).subscribe(data=>console.log(data));
    alert('Added new Flight');
    this.router.navigate(["/Flights"]);
  }
  ngOnInit(): void {
  }

}
