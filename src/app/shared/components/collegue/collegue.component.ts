import {Component, Input, NgModule} from '@angular/core';
import {Colleague} from "../../models/colleague";
import {LikeHate} from "../../models/like-hate";
import {elementAt} from "rxjs";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'tc-collegue',
    templateUrl: './collegue.component.html'

})



export class CollegueComponent {
 @Input() collegue: Colleague = {
    pseudo: 'Oddet',
    photo: 'https://iili.io/Hc70A5G.png',
    score: 32
  }
  disabledHate:boolean = false;
  disabledLike:boolean = false;
  newScore(aimeoupas:LikeHate){
   if(this.collegue.score <1000 && aimeoupas==100){
    this.collegue.score += aimeoupas;

    this.disabledLike=false;
   }   if(this.collegue.score >-1000 && aimeoupas==-100){
    this.collegue.score += aimeoupas;

    this.disabledHate=false;
   }
   this.disabledLike = this.collegue.score >= 1000;
    this.disabledHate = this.collegue.score <= -1000;

   }

}
