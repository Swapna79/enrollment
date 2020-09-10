import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEnrolleeComponent } from './add-enrollee/add-enrollee.component';
import { ViewEnrolleeComponent } from './view-enrollee/view-enrollee.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    AddEnrolleeComponent,
    ViewEnrolleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
