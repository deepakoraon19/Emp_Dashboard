import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Modules/Navbar/Navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { employeelist } from './Modules/employee-list/employee-list.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    employeelist
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    TableModule,
    BrowserModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
