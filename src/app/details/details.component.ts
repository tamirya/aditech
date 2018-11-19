import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [MoviesService]
})
export class DetailsComponent implements OnInit {

  movieData:Movie;

  constructor( private movieService: MoviesService , private route: ActivatedRoute ) { }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];

        this.movieService.getMovieById( id ).subscribe(
          ( _data )=>{
             this.movieData =  _data;
          }
        );
      } else {
          this.goBack();
      }
    });

  }

  goBack(): void {
    window.history.back();
  }

}
