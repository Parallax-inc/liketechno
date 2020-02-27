import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  brends = [
    {img: "assets/img/brends/msi.png"},
    {img: "assets/img/brends/dell.png"},
    {img: "assets/img/brends/fj.gif"},
    {img: "assets/img/brends/hp.png"},
    {img: "assets/img/brends/lenovo.jpg"},
    {img: "assets/img/brends/medion.png"},
    {img: "assets/img/brends/pb.png"}
  ];
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
    pauseOnHover: false,
    arrows: false
  };
  slideConfigBrends = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    infinite: true,
    lazyLoad: 'ondemand',
    dots: false,
    fade: false,
    pauseOnHover: false,
    arrows: false,
    // variableWidth: true
  };
  constructor() { }

  ngOnInit() {
    console.log(this.slides);
    
  }

}
