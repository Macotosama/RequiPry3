import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainhomeComponent } from './interfaz/mainhome/mainhome.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainhomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
