import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from './pipes/score.pipe';
import { CreateColleagueFormsComponent } from './create-colleague-forms/create-colleague-forms.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LikeHateComponent,
    CollegueComponent,
    ColleagueListComponent,
    ScorePipe,
    CreateColleagueFormsComponent
  ],
  exports: [
    LikeHateComponent,
    CollegueComponent,
    ColleagueListComponent,
    ScorePipe,
    CreateColleagueFormsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
