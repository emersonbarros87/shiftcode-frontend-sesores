import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SensorService } from './service/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {

  constructor(
    private router: Router,
    private sensorService: SensorService
  ) { 
    
  }

  ngOnInit(): void {
  }

  

}
