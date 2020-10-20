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

      this.peliculasService.getCartelera().subscribe( resp =>{
        this.peliculas.push(...resp.results);

      });
    }


  }


  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
        .subscribe( resp => {
          //console.log(resp.results);
          this.peliculas = resp.results;
          this.peliculasSlideshow = resp.results;
        })
  }

}
