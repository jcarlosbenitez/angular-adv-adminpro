import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
// @ts-ignore
declare function customInitFuctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: [],
})
export class PagesComponent implements OnInit {
  
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    customInitFuctions();

    // localStorage.setItem('theme', url);
  }
}
