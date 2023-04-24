import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts = Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions = {    chart: {
      renderTo: 'container',
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
      }
  },
  xAxis: {
     categories: ['Mearn', 'Python', 'Data Science', 'Testing', 'FLutter', '. Net',
          'Big Data', 'JavaSpring', 'AI', 'Machine Learning']
  },
  yAxis: {
      title: {
          enabled: false
      }
  },
  tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: 'Placements: {point.y}'
  },
  title: {
      text: 'Yearly Placement Analysis Of Luminar Technolab',
      align: 'center'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://ofv.no/registreringsstatistikk"' +
          'target="_blank">OFV</a>',
      align: 'center'
  },
  legend: {
      enabled: false
  },

  credits:{
    enabled: false
  },
  plotOptions: {
      column: {
          depth: 25
      }
  },
  series: [{
      data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
      colorByPoint: true
  }]}
  HC_exporting(Highcharts);
  }

}






