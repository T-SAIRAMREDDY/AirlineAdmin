import { Component, OnInit } from '@angular/core';
import{FlightService} from '../flight.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {
  flights:any;

  constructor(private flightService:FlightService,private router:Router) { 
    this.flightService.getAllFlightFromApi().subscribe(f=>{this.flights=f;})
  }

  ngOnInit(): void {
  }
}
