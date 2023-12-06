
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, map, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopService {

  constructor(
    private http: HttpClient,
  ) { }

private api= "70fc1f7645036894d03ea96c83955da0"
  // private id =  "b2d423ee5ce7b78db2a186797798be5f0a92fb6742756392965e5479edc86ca5"


  getService():Observable<any> {
    const url= `https://api.themoviedb.org/3/movie/popular`;
    // const url= `https://private-anon-3c1148b3de-trakt.apiary-mock.com/movies/trending`;
    const headers = new HttpHeaders ({
      "Content-Type": "application/json",
      "trakt-api-version": 2,
      // "trakt-api-key": ["b2d423ee5ce7b78db2a186797798be5f0a92fb6742756392965e5479edc86ca5"]
      "trakt-api-key": ["70fc1f7645036894d03ea96c83955da0"]
    });
    // https://api.themoviedb.org/3/movie/11?api_key=70fc1f7645036894d03ea96c83955da0
    const options = {
      headers,
    }
    return this.http.get<any>( url, options)
     .pipe(map(res => res),
     catchError(this.handerError)
     );
  }
  private handerError(err: HttpErrorResponse){
     console.log(err.error);
     return throwError(()=> err);
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppService {

//   constructor() { }
// }
