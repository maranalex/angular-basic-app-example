import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexExampleComponent } from './components/flex-example/flex-example.component';
import { GridExampleComponent } from './components/grid-example/grid-example.component';
import { CatsBreedOverviewComponent } from './components/cats-breed-overview/cats-breed-overview.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CatBreedDetailsComponent } from './components/cats-breed-overview/cat-breed-details/cat-breed-details.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ContentWrapperComponent,
    FlexExampleComponent,
    GridExampleComponent,
    CatsBreedOverviewComponent,
    ErrorPageComponent,
    CatBreedDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatButtonModule,
    //standalone components-v
    NavigationBarComponent, // reason of the error-> intellij not knowing about standalone components
    FooterComponent,
    SideBarComponent,
    //standalone components-^
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
