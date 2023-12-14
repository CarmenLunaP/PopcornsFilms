import { Component, OnInit } from '@angular/core';
import { PopService } from '../../../service/app.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {

  constructor(private services: PopService) { }

  moviesCard: any[] = [];
  moviesImg: any[] = [];
  romanceMovies: any[] = [];
  actionMovies: any[] = [];
  filteredMovies: any[] = [];
  comedyMovies: any[] = [];
  scienceFictionMovies: any[] = [];
  horrorMovies: any[] = [];

  ngOnInit(): void {
    this.showMovies();

    this.filterByGenre(10749).subscribe((romanceMovies: any) => {
      this.romanceMovies = romanceMovies.results;
      console.log(this.romanceMovies);

    });

    this.filterByGenre(28).subscribe((actionMovies: any) => {
      this.actionMovies = actionMovies.results;
    });

    this.filterByGenre(35).subscribe((comedyMovies: any) => {
      this.comedyMovies = comedyMovies.results;
    });


    this.filterByGenre(878).subscribe((scienceFictionMovies: any) => {
      this.scienceFictionMovies = scienceFictionMovies.results;
    });

    this.filterByGenre(27).subscribe((horrorMovies: any) => {
      this.horrorMovies = horrorMovies.results;
    });
  }


  showMovies() {
    this.services.getService().subscribe((data: any) => {
      this.moviesCard = data.results;
      console.log(this.moviesCard);
    });
  }

  getPosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500';
    return `${baseUrl}${posterPath}`;
  }

  filterByGenre(genreId: number) {
    // Devuelve el observable para que pueda ser suscrito en el componente

    return this.services.getMoviesByGenre(genreId);

  }
}

// import { Component, OnInit } from '@angular/core';
// import { PopService } from '../../../service/app.service';

// @Component({
//   selector: 'app-movie-card',
//   templateUrl: './movie-card.component.html',
//   styleUrls: ['./movie-card.component.css'],
// })
// export class MovieCardComponent implements OnInit {
//   constructor(private services: PopService) {}
//   ngOnInit(): void {
//     this.showMovies();

//   }
//   moviesCard: any[]= [];
//   moviesImg: any[]=[];
//   filteredMovies: any[] = [];
//   romanceMovies: any[] =  this.filterByGenre(10749);
//   actionMovies: any[] =  this.filterByGenre(28);

//   showMovies() {
//     this.services.getService().subscribe((data:any) => {
//       this.moviesCard = data.results;


//       console.log(this.moviesCard);
//     });
//   }

//   getPosterUrl(posterPath: string): string {
//     const baseUrl = 'https://image.tmdb.org/t/p/w500';
//     return `${baseUrl}${posterPath}`;
// }

// filterByGenre(genreId: number) {
//   // Filtra las películas por género
//   this.services.getMoviesByGenre(genreId).subscribe((data: any) => {
//     this.filteredMovies = data.results;
//     return
//   });
// }

// }
