import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterMenuComponent
  ],
  exports:[
    HeaderComponent,
    FooterMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
