import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './data/app-data';

import { AppComponent } from './app.component';
import { FilterByCustomerPipe } from './pipe/filter-by-customer.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FilterByCustomerPipe],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
