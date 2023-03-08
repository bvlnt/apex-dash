import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapsService } from '../services/maps.service';
import { MapsData } from './MapRotation';

@Component({
  selector: 'app-maprotation',
  templateUrl: './maprotation.component.html',
  styleUrls: ['./maprotation.component.scss'],
})
export class MaprotationComponent implements OnInit {
  mapsData!: MapsData;
  constructor(private mapsService: MapsService) {}

  ngOnInit(): void {
    this.mapsService.getMapsData().subscribe((data) => {
      this.mapsData = data;
    });
  }
}
