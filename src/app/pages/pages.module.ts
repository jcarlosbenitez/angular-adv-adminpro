import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ShareModule } from '../share/share.module';
// import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
  ],
  exports: [
     DashboardComponent,
     ProgressComponent,
     Grafica1Component,
     PagesComponent
  ]
})
export class PagesModule { }
