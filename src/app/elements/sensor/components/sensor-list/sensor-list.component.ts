import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SensorService } from '../../service/sensor.service';
import { SensorRequest } from '../../models/sensor-model';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.scss']
})
export class SensorListComponent implements OnInit {

  sensor: SensorRequest;

  constructor(
    private sensorService: SensorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sensorService.readById(id).subscribe(sensor => {
        this.sensor = sensor;
      });
    }
  }

  listSensor() {
    this.sensorService.list(this.sensor).subscribe(() => {
      this.router.navigate(['/sensor'])
    });
  }

  back() {
    this.router.navigate(['/sensor'])
  }

}

