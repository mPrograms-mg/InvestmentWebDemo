import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PortfolioServicesComponent } from './components/portfolio-services/portfolio-services.component';
import { ScrollComponent } from './components/scroll/scroll.component';
@NgModule({
  declarations: [AppComponent, CarouselComponent, PortfolioServicesComponent, ScrollComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
