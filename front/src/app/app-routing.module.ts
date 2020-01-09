import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteModule } from './features/site/site.module';
import { SalonModule } from './features/salon/salon.module';
import { PageNotFoundComponent } from './features/common/page-not-found/page-not-found.component';

// Déclaration des routes de l'application 
const routes: Routes = [
  // route racine
  { path: '',   redirectTo: '/site', pathMatch: 'full' },

  // Routage vers modules
  { path: 'site', pathMatch: 'full', loadChildren: './features/site/site.module#SiteModule'},
  { path: 'salon', pathMatch: 'full', loadChildren: './features/salon/salon.module#SalonModule'},

  // fallback
  { path: '**',   redirectTo: '/erreur-404', pathMatch: 'full' },

  // Pages erreurs
  { path: 'erreur-404',      component: PageNotFoundComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SiteModule,
    SalonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
