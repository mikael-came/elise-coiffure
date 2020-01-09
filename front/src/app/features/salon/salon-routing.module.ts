import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheClientComponent } from './components/recherche-client/recherche-client.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'salon', redirectTo: 'salon/rechercheClient' },
  { path: 'salon/rechercheClient',      component: RechercheClientComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class SalonRoutingModule { }
