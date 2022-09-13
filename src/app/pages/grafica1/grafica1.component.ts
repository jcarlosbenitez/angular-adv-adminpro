import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component implements OnInit {
  public labels1: string[] = [
    'Download Sales1',
    'In-Store Sales1',
    'Mail-Order Sales1',
  ];
  public labels2: string[] = [
    'Download Sales2',
    'In-Store Sales2',
    'Mail-Order Sales2',
  ];
  public labels3: string[] = [
    'Download Sales3',
    'In-Store Sales3',
    'Mail-Order Sales3',
  ];
  public labels4: string[] = [
    'Download Sales4',
    'In-Store Sales4',
    'Mail-Order Sales4',
  ];
  data1 =  [
    { data: [350, 450, 100] ,
      backgroundColor: ["red", "green", "blue"],
      hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],}
  ]
  data2 =  [
    { data: [350, 450, 100] ,
      backgroundColor: ["red", "green", "blue"],
      hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],}
  ]
  data3 =  [
    { data: [350, 450, 100] ,
      backgroundColor: ["red", "green", "blue"],
      hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],}
  ]
  data4 =  [
    { data: [350, 450, 100] ,
      backgroundColor: ["red", "green", "blue"],
      hoverBackgroundColor: ["darkred", "darkgreen", "darkblue"],}
  ]
  constructor() {}

  ngOnInit(): void {}
}
