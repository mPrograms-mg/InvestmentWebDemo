import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgImageSliderModule } from 'ng-image-slider';
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
