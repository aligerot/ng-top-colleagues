import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CollegueComponent} from "../collegue/collegue.component";
import {LikeHate} from "../../models/like-hate";
@Component({
  selector: 'tc-like-hate',
  template: `
    <button (click)="LikeCollegue()" [disabled]=boutonDisableLike >j'aime</button>
    <button (click)="HateCollegue()">je déteste</button>





  `
})
export class LikeHateComponent {

  @Output() aimeOuPas = new EventEmitter<LikeHate>();
  @Input() boutonDisableLike = false;
  @Input() boutonDisableHate = false;


HateCollegue(){
 this.aimeOuPas.emit( LikeHate.HATE);
}
LikeCollegue(){
  this.aimeOuPas.emit( LikeHate.LIKE);
}


}
