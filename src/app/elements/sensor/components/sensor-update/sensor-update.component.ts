import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SensorRequest } from '../../models/sensor-model';
import { SensorService } from '../../service/sensor.service';

@Component({
  selector: 'app-sensor-update',
  templateUrl: './sensor-update.component.html',
  styleUrls: ['./sensor-update.component.scss']
})
export class SensorUpdateComponent implements OnInit {
  weather = ['sol', 'nublado', 'chuva', 'temporal', 'geada', 'chuva forte'];
  msg = '';
  sensor: SensorRequest;

  constructor(
    private sensorService: SensorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id) {
      this.sensorService.readById(id).subscribe(sensor => {
        this.sensor = sensor
      });
    }
  }

  weatherRandom() {
    this.sensor.weather = this.weather[Math.floor(Math.random() * this.weather.length)]
  }

  updateSensor() {
    this.getVolumetry();
    this.weatherRandom()
    this.sensorService.update(this.sensor).subscribe(() => {
      this.router.navigate(['/sensor']);
    });
  }

  getVolumetry() {
    if (this.sensor.volume <= 25) {
      this.sensor.status = 'Normal';
      this.sensor.alert = '* NÃO *';
      this.sensorService.showMensage('DADOS ATUALIZADOS!');
      return
    }

    if (this.sensor.volume >= 26 && this.sensor.volume <= 50) {
      this.sensor.status = 'Moderado';
      this.sensor.alert = '* NÃO *';
      this.sensorService.showMensage('DADOS ATUALIZADOS!!');
      return
    }

    if (this.sensor.volume >= 51 && this.sensor.volume <= 75) {
      this.sensor.status = 'Atenção';
      this.sensor.alert = '* SIM *';
      this.msg = 'Alertar as autoridades para desviar o fluxo na região!'
      this.snackBar.open(this.msg, 'X', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['yellow']
      })
      return
    }

    if (this.sensor.volume >= 76) {
      this.sensor.status = 'Crítico';
      this.sensor.alert = '* SIM *';
      this.msg = 'Alertar as autoridades para o risco enchente!'
      this.snackBar.open(this.msg, 'X', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red']
      })
      return
    }
  }

  cancel() {
    this.router.navigate(['/sensor']);
  }

}
