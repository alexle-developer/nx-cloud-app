import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, PagenotfoundComponent],
  exports: [HomeComponent, PagenotfoundComponent],
})
export class PagesModule {}
