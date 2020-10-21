import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MovieResponsive } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

public pelicula: MovieResponsive;
public cast: Cast[];

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private location: Location,
               private router: Router ) { }

  ngOnInit(): void {

   const{id}= this.activatedRoute.snapshot.params;
   
   this.peliculasService.getPeliculaDetalle(id).subscribe( pelicula =>{
     if(pelicula){
       this.router.navigateByUrl('/home');
      return;
     }
     this.pelicula= pelicula;
   });

   this.peliculasService.getCast(id).subscribe( cast =>{
   console.log(cast)
   this.cast = cast;
    })
  }



  onRegresar(){
    this.location.back();
  }
}
