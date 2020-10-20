import { Component, HostListener, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas: Movies[] = []
  public peliculasSlideshow: Movies[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll(){

    const pos = (document.documentElement.scrollTop || document.body.scrollTop)+1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos + max){

      if(this.peliculasService.cargando){return;}

      this.peliculasService.getCartelera().subscribe( peliculas =>{
        this.peliculas.push(...peliculas);

      });
    }


  }


  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
        .subscribe( peliculas => {
          //console.log(resp.results);
          this.peliculas = peliculas;
          this.peliculasSlideshow = peliculas;
        })
  }

}
