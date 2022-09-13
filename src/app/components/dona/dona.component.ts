import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {
  @Input() label: string[] = []
  @Input() title: string = ''
  @Input() data: any = ''
 
  public doughnutChartLabels: string[] = [
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.label,
      datasets: this.data
  };
  public doughnutChartType: ChartType = 'doughnut'
  constructor() { }

  ngOnInit(): void {
    this.doughnutChartData = {
      labels: this.label,
      datasets: this.data}
      // this.doughnutChartType = this.typeChart
  }

}
