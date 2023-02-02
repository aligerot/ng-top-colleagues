import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { CollegueComponent } from './components/collegue/collegue.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    CollegueComponent
  ],
  exports: [
    LikeHateComponent,
    CollegueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
