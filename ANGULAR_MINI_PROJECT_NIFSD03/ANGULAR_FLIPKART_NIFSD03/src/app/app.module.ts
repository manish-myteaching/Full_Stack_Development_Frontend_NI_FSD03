import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Adjust path if necessary
import { RouterModule } from '@angular/router'; // Import RouterModule if needed
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, // Add your components here
    // Other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Import other modules as needed
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] // The root component
})
export class AppModule { }
