import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent // Declare HomeComponent here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]) // Configure your routes here if you have them
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
