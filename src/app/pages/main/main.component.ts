import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  slides = [
    {img: "assets/img/sliderMain/1.png"},
    {img: "assets/img/sliderMain/2.png"},
    {img: "assets/img/sliderMain/3.png"},
    
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    lazyLoad: 'ondemand',
    dots: true,
    fade: true,
    pauseOnHover: false
  };
  constructor() { }

  ngOnInit() {
    console.log(this.slides);
    
  }

}
