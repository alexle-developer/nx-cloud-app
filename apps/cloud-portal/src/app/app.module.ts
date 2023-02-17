// import modules
import {ProductData} from '@nx-cloud-app/products';
import {LayoutModule} from '@nx-cloud-app/layout';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppRoutingModule} from './app-routing.module';

// import components
import {AppComponent} from './app.component';



// add angular in web memory API
// move the routes to app-routing module

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
