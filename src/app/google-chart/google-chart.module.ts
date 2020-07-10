import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ServiceModule } from './service/service.module';


@NgModule({
  declarations: [PieChartComponent],
  imports: [
    CommonModule,
    ServiceModule    

  ],
  exports: [PieChartComponent],
})
export class GoogleChartModule { }
