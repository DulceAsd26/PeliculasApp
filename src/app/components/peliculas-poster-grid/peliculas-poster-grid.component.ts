import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() peliculas: Movies[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

}
