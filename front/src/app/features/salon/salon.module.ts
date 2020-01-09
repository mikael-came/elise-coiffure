import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheClientComponent } from './components/recherche-client/recherche-client.component';
import { SalonRoutingModule } from './salon-routing.module';


/** Déclaration des composants */
const SALON_COMPONENTS = [
  RechercheClientComponent,
];


@NgModule({
  imports: [CommonModule, SalonRoutingModule],
  providers: [],
  declarations: SALON_COMPONENTS,
  exports: SALON_COMPONENTS,

})
export class SalonModule { }
