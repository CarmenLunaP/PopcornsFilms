import { Component, Input, OnInit } from '@angular/core';
import { PopService } from 'src/app/service/app.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  constructor(private services: PopService) {}

  @Input() moviesCard: any[] = [];

  ngOnInit(): void {
  }

  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return `${baseUrl}${posterPath}`;
  }

}

