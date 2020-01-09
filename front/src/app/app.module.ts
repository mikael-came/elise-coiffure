import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteModule } from './features/site/site.module';
import { PageNotFoundComponent } from './features/common/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
