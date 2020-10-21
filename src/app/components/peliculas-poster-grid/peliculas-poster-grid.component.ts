import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() peliculas: Movies[];

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  onMovieClick( peliculas:Movies){
    
    this.router.navigate(['/pelicula', peliculas.id]);
  }

}
