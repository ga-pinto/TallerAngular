import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  seasonsAverage: number = 0;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.series = data;
      this.calculateSeasonsAverage();
    });
  }

  calculateSeasonsAverage(): void {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.seasonsAverage = (totalSeasons / this.series.length);
  }
}
