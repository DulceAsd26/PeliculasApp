import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() peliculas: Movies[];

  public mySwiper: Swiper;

  constructor() { }

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });
  } 

    ngOnInit(): void {

    console.log(this.peliculas);

  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
