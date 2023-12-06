import { Component, OnInit } from '@angular/core';
import { PopService } from '../../../service/app.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit {
  constructor(private services: PopService) {}
  ngOnInit(): void {
    this.showMovies();
  }
  moviesCard: any[] = [];

  showMovies() {
    this.services.getService().subscribe((data) => {
      this.moviesCard = data;
      console.log(data);
    });
  }
}
