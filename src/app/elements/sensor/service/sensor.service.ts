import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs';
import { SensorRequest, HeaderData } from '../models/sensor-model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private _headerData = new BehaviorSubject<HeaderData>({
    routeUrl: ''
  })

  baseUrl = 'https://back-end-shiftcode.herokuapp.com/sensores'
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,

  ) { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }

  showMensage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(sensor: SensorRequest): Observable<SensorRequest> {
    return this.http.post<SensorRequest>(this.baseUrl, sensor).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  read(): Observable<SensorRequest[]> {
    return this.http.get<SensorRequest[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<SensorRequest> {
    const urlRead = `${this.baseUrl}/${id}`
    return this.http.get<SensorRequest>(urlRead).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  update(sensor: SensorRequest): Observable<SensorRequest> {
    const urlUpdate = `${this.baseUrl}/${sensor.id}`
    return this.http.put<SensorRequest>(urlUpdate, sensor).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  delete(sensor: SensorRequest): Observable<SensorRequest> {
    const urlDelete = `${this.baseUrl}/${sensor.id}`
    return this.http.delete<SensorRequest>(urlDelete).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  list(sensor: SensorRequest): Observable<SensorRequest> {
    const urlList = `${this.baseUrl}/${sensor.id}`
    return this.http.get<SensorRequest>(urlList).pipe(
      map((obj) => obj),
      catchError(error => this.errorHandler(error))
    );
  }

  errorHandler(error: any): Observable<any> {
    this.showMensage('Ocorreu um erro!', true);
    return EMPTY
  }
}