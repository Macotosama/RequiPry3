import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainhomeComponent } from './interfaz/mainhome/mainhome.component';
import { MenuComponent } from './interfaz/menu/menu.component';
import { HotelesComponent } from './interfaz/hoteles/hoteles.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainhomeComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'hoteles', component: HotelesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
