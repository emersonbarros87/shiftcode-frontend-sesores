import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorService } from '../../service/sensor.service';
import { SensorRequest } from '../../models/sensor-model';

@Component({
  selector: 'app-sensor-delete',
  templateUrl: './sensor-delete.component.html',
  styleUrls: ['./sensor-delete.component.scss']
})
export class SensorDeleteComponent implements OnInit {

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

  deleteSensor() {
    this.sensorService.delete(this.sensor).subscribe(() => {
      this.sensorService.showMensage('DADOS EXCLUÍDOS!')
      this.router.navigate(['/sensor'])
    });
  }

  cancel() {
    this.router.navigate(['/sensor'])
  }

}
