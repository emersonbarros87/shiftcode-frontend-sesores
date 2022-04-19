import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './elements/about/about.component';
import { SensorCreateComponent } from './elements/sensor/components/sensor-create/sensor-create.component';
import { SensorDeleteComponent } from './elements/sensor/components/sensor-delete/sensor-delete.component';
import { SensorListComponent } from './elements/sensor/components/sensor-list/sensor-list.component';
import { SensorUpdateComponent } from './elements/sensor/components/sensor-update/sensor-update.component';
import { SensorComponent } from './elements/sensor/sensor.component';

import { HomeComponent } from './elements/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sensor',
    component: SensorComponent
  },
  {
    path: 'sensor/create',
    component: SensorCreateComponent
  },
  {
    path: 'sensor/update/:id',
    component: SensorUpdateComponent
  },
  {
    path: 'sensor/delete/:id',
    component: SensorDeleteComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'sensor/list/:id',
    component: SensorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
