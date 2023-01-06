import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListModule } from './Modules/employee-list/employee-list.module';
import {ConfirmationService} from 'primeng/api';
import { Navbar } from './Modules/Navbar/Navbar.module';
import { HomeModule } from './Modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    // employeelist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    EmployeeListModule,
    Navbar,
    HomeModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
