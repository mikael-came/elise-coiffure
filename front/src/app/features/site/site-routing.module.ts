import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';



const routes: Routes = [
  { path: 'site',           redirectTo: '/site/home'},
  { path: 'site/home',      component: AccueilComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class SiteRoutingModule { }
