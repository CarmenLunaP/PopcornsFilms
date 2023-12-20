import { Component, Input, OnInit } from '@angular/core';
import { PopService } from '../../../service/app.service';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {

  constructor(private services: PopService) { }
  @Input() moviesCard: Movie[] = [];
  // moviesCard: Movie[] = [];
  moviesImg: Movie[] = [];
  romanceMovies: Movie[] = [];
  actionMovies: Movie[] = [];
  filteredMovies: Movie[] = [];
  comedyMovies: Movie[] = [];
  scienceFictionMovies: Movie[] = [];
  horrorMovies: Movie[] = [];

  ngOnInit(): void {
    // this.showMovies();

    this.filterByGenre(10749).subscribe((data) => {
      this.romanceMovies = data.results;
      console.log(this.romanceMovies, 'Romance');

    });

    this.filterByGenre(28).subscribe((data) => {
      this.actionMovies = data.results;
    });

    this.filterByGenre(35).subscribe((data) => {
      this.comedyMovies = data.results;
    });


    this.filterByGenre(878).subscribe((data) => {
      this.scienceFictionMovies = data.results;
    });

    this.filterByGenre(27).subscribe((data) => {
      this.horrorMovies = data.results;
    });
  }


  // showMovies() {
  //   this.services.getService().subscribe((data) => {
  //     this.moviesCard = data.results;
  //     console.log(data);
  //     console.log(this.moviesCard, 'data tal cual');
  //     console.log(this.moviesCard, 'populares');
  //   });
  // }

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
