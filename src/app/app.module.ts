import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; // Import your HeaderComponent here
import { routes } from './app.routes'; // Import your routes

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent // Include HeaderComponent in declarations
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure your routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
