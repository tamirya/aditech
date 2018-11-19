import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MoviesService]
})
export class HomeComponent implements OnInit {

  moviesData:Movie[]=[];
  searchText: string = "";


  constructor( private movieService: MoviesService , private router: Router ) { }

  ngOnInit():void {

    this.getItems();
  }

  getItems(){
    this.movieService.getAll().subscribe(
        ( _data )=>{
          this.moviesData =  _data['results'];
        }
    );
  
  }

  getoDetail(movie: Movie): void {
    const link = ['/detail', movie.id];
    this.router.navigate(link);
  }

}
