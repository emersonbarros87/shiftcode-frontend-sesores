import { Component, OnInit } from '@angular/core';
import { SensorService } from '../../../sensor/service/sensor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sensorService: SensorService
  ) { }

  ngOnInit(): void {
  }
  get routeUrl(): string {
    return this.sensorService.headerData.routeUrl;
  }
}
