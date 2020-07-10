import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit(): void {
  }
  private drawChart(){
    let chart = new this.gLib.visualization.PieChart(document.getElementById('divPieChart'));
    let data = new this.gLib.visualization.DataTable();
    data.addColumn('string', 'Task');
    data.addColumn('number', 'Time');
    data.addRows([
      ['Soting', 3],
      ['Efile', 6],
      ['Census', 4],
      ['SDB', 5],
      ['Sorting-2', 2]
    ]);

    let options = {'title':'Time Utilization Info'};

    chart.draw(data, options);
  }
}
