import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { GoogleChartModule } from './google-chart/google-chart.module';
@NgModule({
   declarations: [
      AppComponent,
      AdminComponent,
      UserComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      GoogleChartModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
