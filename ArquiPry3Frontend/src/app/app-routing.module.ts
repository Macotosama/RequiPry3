import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainhomeComponent } from './interfaz/mainhome/mainhome.component';
import { MenuComponent } from './interfaz/menu/menu.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainhomeComponent },
  {path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
