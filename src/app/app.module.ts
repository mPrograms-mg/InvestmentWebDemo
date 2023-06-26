import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PortfolioServicesComponent } from './components/portfolio-services/portfolio-services.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RegistrationPageComponent } from './auth/registration-page/registration-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';
@NgModule({
  declarations: [AppComponent, CarouselComponent, PortfolioServicesComponent, ScrollComponent, ContactPageComponent, AboutPageComponent, RegistrationPageComponent, LoginPageComponent, BookPageComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
