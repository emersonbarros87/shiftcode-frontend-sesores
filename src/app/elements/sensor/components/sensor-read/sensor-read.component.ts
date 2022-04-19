import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { SensorRequest } from '../../models/sensor-model';
import { SensorService } from '../../service/sensor.service';
import { SensorDataSource } from './sensor-read-datasource';

@Component({
  selector: 'app-sensor-read',
  templateUrl: './sensor-read.component.html',
  styleUrls: ['./sensor-read.component.scss']
})

export class SensorReadComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<SensorRequest>;
  dataSource: SensorDataSource;

  sensores: SensorRequest[] = [];
  displayedColumns = [ 'id', 'date', 'volume', 'weather', 'status', 'alert','action',  'more'  ];

  constructor
    (private sensorService: SensorService,
      private router: Router,
  ) {

    sensorService.headerData = {
      routeUrl: '/sensor'
    }
    this.dataSource = new SensorDataSource();
  }

  ngOnInit(): void {
    this.sensorService.read().subscribe(sensores => {
      this.sensores = sensores
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  sensorRegister() {
    this.router.navigate(['/sensor/create'])
  }
}