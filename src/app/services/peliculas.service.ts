import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable} from 'rxjs';
import { tap} from 'rxjs/operators';
import { CarteleraResponsive } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3'
  private carteleraPage = 1;

  constructor( private http: HttpClient) { }

  get params(){
    return {
      api_key:'ee9e411e5e4d8180819d3e7e93c86a1e',
      language: 'en-US',
      page: this.carteleraPage.toString()
    }
  }



  getCartelera():Observable<CarteleraResponsive>{

    return this.http.get<CarteleraResponsive>(`${this.baseUrl}/movie/now_playing?`,{
      params: this.params
    }).pipe(
      tap (() => {
        this.carteleraPage += 1;
      })
      );


  }


}
