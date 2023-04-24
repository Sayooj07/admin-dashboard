import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  Highcharts = Highcharts

  chartOptions ={}

  constructor(){

this.chartOptions ={

  chart: {
    type: 'pie',
    options3d: {
        enabled: true,
        alpha: 45,
        beta: 0
    }
},
title: {
    text: 'Averege Student Admission,2022-23',
    align: 'center'
},

accessibility: {
    point: {
        valueSuffix: '%'
    }
},
tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }
},

credits:{
  enabled: false
},
series: [{
    type: 'pie',
    name: 'Count',
    data: [
        ['Mearn', 23],
        ['Python', 18],
      
        ['Asp.NEt', 9],
        ['Testing', 8],
        ['Flutter', 30],
        ['Big Data', 16],
    ]
}]


}
  }

}
