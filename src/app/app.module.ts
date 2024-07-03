import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appConfig } from './app.config'; // Import your app configuration

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Ensure to import RouterModule.forRoot([]) here as well
  ],
  providers: [
    appConfig.providers // Include appConfig providers here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
