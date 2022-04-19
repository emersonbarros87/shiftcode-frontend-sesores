import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './elements/about/about.component';
import { SensorCreateComponent } from './elements/sensor/components/sensor-create/sensor-create.component';
import { SensorDeleteComponent } from './elements/sensor/components/sensor-delete/sensor-delete.component';
import { SensorListComponent } from './elements/sensor/components/sensor-list/sensor-list.component';
import { SensorReadComponent } from './elements/sensor/components/sensor-read/sensor-read.component';
import { SensorUpdateComponent } from './elements/sensor/components/sensor-update/sensor-update.component';
import { SensorComponent } from './elements/sensor/sensor.component';
import { HomeComponent } from './elements/views/home/home.component';
import { FooterComponent } from './elements/views/template/footer/footer.component';
import { HeaderComponent } from './elements/views/template/header/header.component';
import { NavComponent } from './elements/views/template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    SensorCreateComponent,
    SensorComponent,
    SensorReadComponent,
    SensorDeleteComponent,
    SensorUpdateComponent,
    SensorListComponent,
    

  ],
  imports: [
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSelectModule,
    MatSlideToggleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
