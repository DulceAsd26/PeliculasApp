import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public texto: string = '';
  public peliculas: Movies[]=[]

  constructor( private activateRoute:ActivatedRoute,
               private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.activateRoute.params.subscribe( params => {
      
      this.texto = params.texto; 

      this.peliculasService.buscarPeliculas( params.texto).subscribe(peliculas =>{
        this.peliculas = peliculas;
      })
    })
  }

}
