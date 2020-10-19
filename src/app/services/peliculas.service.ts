import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { CarteleraResponsive } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor( private http: HttpClient) { }

  getCartelera():Observable<CarteleraResponsive>{

    return this.http.get<CarteleraResponsive>('https://api.themoviedb.org/3/movie/now_playing?api_key=ee9e411e5e4d8180819d3e7e93c86a1e&language=en-US&page=1')
  }
}
