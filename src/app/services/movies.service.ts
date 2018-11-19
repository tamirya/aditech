import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Movie } from '../models/movie.model';

@Injectable({
    providedIn: 'root',
  })
export class MoviesService {

    getAllurl = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7a5658d07734c8e9fb77b8722ca0a0af'

    getMovieByIdUrl='https://api.themoviedb.org/3/movie/'

    constructor(private http: HttpClient) {}

    getAll(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.getAllurl);
    }

    getMovieById( movieId:number ): Observable<Movie> {
        return this.http.get<Movie>(this.getMovieByIdUrl+movieId+'?api_key=7a5658d07734c8e9fb77b8722ca0a0af');
    }
}