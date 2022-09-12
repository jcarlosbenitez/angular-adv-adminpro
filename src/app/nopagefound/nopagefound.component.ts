import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nppagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent {

  year = new Date().getFullYear(); 
}
