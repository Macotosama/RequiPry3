import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MainhomeComponent } from './interfaz/mainhome/mainhome.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RegistrarComponent } from './interfaz/registrar/registrar.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MenuComponent } from './interfaz/menu/menu.component';
import { HotelesComponent } from './interfaz/hoteles/hoteles.component';
import { MatTableModule } from '@angular/material/table';
import { VerinfohotelComponent } from './interfaz/hoteles/verinfohotel/verinfohotel.component';
import { EditarInfoHotelComponent } from './interfaz/hoteles/editar-info-hotel/editar-info-hotel.component';
import { MatRadioModule } from '@angular/material/radio';
import { CrearHotelComponent } from './interfaz/hoteles/crear-hotel/crear-hotel.component';
import { AventurasComponent } from './interfaz/aventuras/aventuras.component';
import { VerinfoaventuraComponent } from './interfaz/aventuras/verinfoaventura/verinfoaventura.component';
import { EditarInfoAventuraComponent } from './interfaz/aventuras/editar-info-aventura/editar-info-aventura.component';
import { CrearAventuraComponent } from './interfaz/aventuras/crear-aventura/crear-aventura.component';
import { HabitacionesComponent } from './interfaz/habitaciones/habitaciones.component';
import { MatSelectModule } from '@angular/material/select';
import { VerinfohabitacionComponent } from './interfaz/habitaciones/verinfohabitacion/verinfohabitacion.component';
import { EditarInfoHabitacionComponent } from './interfaz/habitaciones/editar-info-habitacion/editar-info-habitacion.component';
import { CrearHabitacionComponent } from './interfaz/habitaciones/crear-habitacion/crear-habitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainhomeComponent,
    RegistrarComponent,
    MenuComponent,
    HotelesComponent,
    VerinfohotelComponent,
    EditarInfoHotelComponent,
    CrearHotelComponent,
    AventurasComponent,
    VerinfoaventuraComponent,
    EditarInfoAventuraComponent,
    CrearAventuraComponent,
    HabitacionesComponent,
    VerinfohabitacionComponent,
    EditarInfoHabitacionComponent,
    CrearHabitacionComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    MatRadioModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
