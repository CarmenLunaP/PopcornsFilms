import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { PopService } from 'src/app/service/app.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{

  constructor(private services: PopService) {}
  moviesCard: Movie[] = [];

  ngOnInit(): void {
    this.showMovies();
  }

  showMovies() {
    this.services.getService().subscribe((data) => {
      this.moviesCard = data.results;
      console.log(data);
      console.log(this.moviesCard, 'data tal cual');
      console.log(this.moviesCard, 'populares');
    });
  }


  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return `${baseUrl}${posterPath}`;
  }

}

