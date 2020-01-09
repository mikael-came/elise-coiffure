import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { SiteRoutingModule } from './site-routing.module';

/** Déclaration des composants */
const SITE_COMPONENTS = [
  AccueilComponent,
];


@NgModule({
  imports: [CommonModule, SiteRoutingModule],
  providers: [],
  declarations: SITE_COMPONENTS,
  exports: SITE_COMPONENTS,

})
export class SiteModule { }
