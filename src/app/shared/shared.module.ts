import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeHateComponent } from './components/like-hate/like-hate.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { ColleagueListComponent } from './components/colleague-list/colleague-list.component';
import { ScorePipe } from '../shared/pipes/score.pipe';
import { VotingHistoryComponent } from '../shared/components/voting-history/voting-history.component';



@NgModule({
  declarations: [
    LikeHateComponent,
    CollegueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent
  ],
  exports: [
    LikeHateComponent,
    CollegueComponent,
    ColleagueListComponent,
    ScorePipe,
    VotingHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
