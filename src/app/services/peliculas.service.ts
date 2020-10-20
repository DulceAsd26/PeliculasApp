import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


import { Observable, of} from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { CarteleraResponsive, Movies } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3'
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient) { }

  get params(){
    return {
      api_key:'ee9e411e5e4d8180819d3e7e93c86a1e',
      language: 'en-US',
      page: this.carteleraPage.toString()
    }
  }



  getCartelera():Observable<Movies[]>{
    if( this.cargando){
      return of([]);
    }

    this.cargando = true;
    return this.http.get<CarteleraResponsive>(`${this.baseUrl}/movie/now_playing?`,{
      params: this.params
    }).pipe(
      map((resp)=>resp.results),
      tap (() => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
      );


  }


}
