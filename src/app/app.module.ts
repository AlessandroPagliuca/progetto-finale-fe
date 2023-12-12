import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
import { NavbarComponent } from './navbar/navbar.component';
// import { RouterModule } from '@angular/router';
// import { CompetenzeComponent } from './competenze/competenze.component';
import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
>>>>>>> dbdb129b546b1f09f91021f43dbee2d31ac82a35

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
=======
    SharedModule,
>>>>>>> dbdb129b546b1f09f91021f43dbee2d31ac82a35
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
