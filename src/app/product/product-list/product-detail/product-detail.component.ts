import { Component, OnInit } from '@angular/core';
declare var $:any;
import * as AOS from 'aos';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function(){
      // $('.carousel').carousel({ interval: 2000 });
  }); 
      AOS.init({
      once: true,
    });
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  
  }

}
