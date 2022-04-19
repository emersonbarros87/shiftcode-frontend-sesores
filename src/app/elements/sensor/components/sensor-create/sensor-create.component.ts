import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SensorRequest } from '../../models/sensor-model';
import { SensorService } from '../../service/sensor.service';

@Component({
  selector: 'app-sensor-create',
  templateUrl: './sensor-create.component.html',
  styleUrls: ['./sensor-create.component.scss']
})

export class SensorCreateComponent implements OnInit {
  
  weather = ['sol', 'nublado', 'chuva', 'temporal', 'geada', 'chuva forte'];
  sensor = new SensorRequest;
  msg = '';
  constructor(
    private sensorService: SensorService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  createSensor() {
    this.getVolumetry();
    this.weatherRandom();
    this.sensorService.create(this.sensor).subscribe(() => {
      if(this.sensor.date && this.sensor.volume) {
        this.router.navigate(['/sensor']);
      }
    });
  }

  weatherRandom() {
    this.sensor.weather = this.weather[Math.floor(Math.random() * this.weather.length)]
  }

  validForms() {
    if (!this.sensor.date) {
      this.msg = 'Por favor, informa a Data.'
      this.snackBar.open(this.msg, 'X', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['msgDate']
      })
      return;
    }

    if (!this.sensor.volume) {
      this.msg = 'Por favor, informe o voulme.'
      this.snackBar.open(this.msg, 'X', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['msgDate']
      })
      return;
    }

    if(this.sensor) {
      this.createSensor();
    }
  }

  getVolumetry() {
    if (this.sensor.volume <= 25) {
      this.sensor.status = 'Normal';
      this.sensor.alert = '* NÃO *';
      this.sensorService.showMensage('SENSOR CRIADO!');
      return
    }

    if (this.sensor.volume >= 26 && this.sensor.volume <= 50) {
      this.sensor.status = 'Moderado';
      this.sensor.alert = '* NÃO *';
      this.sensorService.showMensage('SENSOR CRIADO!');
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

  save() {
    this.validForms();
  }

  cancel() {
    this.router.navigate(['/sensor']);
  }

}
