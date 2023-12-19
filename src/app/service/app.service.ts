import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, ResponseApi } from '../interfaces/movie.interface';
@Injectable({
  providedIn: 'root'
})
export class PopService {
  private apiKey = '70fc1f7645036894d03ea96c83955da0';
  private baseUrl = 'https://api.themoviedb.org/3';
  constructor(private http: HttpClient) {}

  getService(): Observable<ResponseApi> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get<ResponseApi>(`${this.baseUrl}/movie/popular`, { params });
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey).set('with_genres', genreId.toString());
    return this.http.get<any>(`${this.baseUrl}/discover/movie`, { params });
  }
}



// https://api.themoviedb.org/3/genre/movie/list
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { Observable, map, catchError, throwError } from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
// export class PopService {

//   constructor(
//     private http: HttpClient,
//   ) { }

// private api= "70fc1f7645036894d03ea96c83955da0"
//   //  private id =  "b2d423ee5ce7b78db2a186797798be5f0a92fb6742756392965e5479edc86ca5"


//   getService():Observable<any> {
//     const url= `https://api.themoviedb.org/3/movie/popular`
//     //  const url= `https://private-anon-3c1148b3de-trakt.apiary-mock.com/movies/trending`;
//     const headers = new HttpHeaders ({
//       "Content-Type": "application/json",
//       "trakt-api-version": 2,
//       "trakt-api-key": "b2d423ee5ce7b78db2a186797798be5f0a92fb6742756392965e5479edc86ca5"
//       // "trakt-api-key": "70fc1f7645036894d03ea96c83955da0"
//     });
//     const options = {
//       headers,
//     }
//     return this.http.get<any>( url, options)
//      .pipe(map(res => res),
//      catchError(this.handerError)
//      );
//   }
//   private handerError(err: HttpErrorResponse){
//      console.log(err.error);
//      return throwError(()=> err);
//   }
// }


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {

//   constructor() { }
// }
