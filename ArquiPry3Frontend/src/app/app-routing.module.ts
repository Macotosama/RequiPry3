import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainhomeComponent } from './interfaz/mainhome/mainhome.component';
import { MenuComponent } from './interfaz/menu/menu.component';
import { HotelesComponent } from './interfaz/hoteles/hoteles.component';
import { AventurasComponent } from './interfaz/aventuras/aventuras.component';
import { HabitacionesComponent } from './interfaz/habitaciones/habitaciones.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainhomeComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'hoteles', component: HotelesComponent },
  {path: 'aventuras', component: AventurasComponent },
  {path: 'habitaciones', component: HabitacionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
