import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as AOS from 'aos';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  version:string = '';
  constructor() {
    document.body.scrollTop = 0;
   this.version = localStorage.getItem("version") as string;
    AOS.init({
      once: true,
    });
    $(function(){
      $('.carousel').carousel({ interval: 2000,   autoplay: false, });
      // $('.carousel').carousel(0);
      // $('.carousel').carousel('pause'); 
  }); 
   }

  ngOnInit() {
    console.log("test")
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  
    AOS.init({
      once: true,
    });
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  
    $('.center').slick({
      dots: true,
      centerMode: false,
      infinite: true,
      slidesToShow: 4,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 1000, 
    // mobileFirst:true,//add this one
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }
    ]
    });
    // $('.center').slick('slickGoTo', 0);
  }

  
}
