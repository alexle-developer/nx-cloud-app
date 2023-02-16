
import {HomeComponent, PagenotfoundComponent} from '@nx-cloud-app/pages';
import {LayoutModule} from '@nx-cloud-app/layout';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '**', component: PagenotfoundComponent}
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
