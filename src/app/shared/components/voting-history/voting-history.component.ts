import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Vote} from "../../models/vote";
import {Colleague} from "../../models/colleague";
import {LikeHate} from "../../models/like-hate";
import {VoteService} from "../../../service/vote.service";

@Component({
  selector: 'tc-voting-history',
  templateUrl: './voting-history.component.html',
  styleUrls: ['./voting-history.component.scss']
})
export class VotingHistoryComponent {
  private voteList:Array<Vote> = [];
  vote: Vote | undefined;

  constructor(private voteSrv:VoteService) {



    this.voteSrv.getVoteByApi().subscribe(response =>{
      this.voteList = response;
      return this.voteList;

    });
  }
  supprVoteFromList(vote:Vote):void{
    this.voteList.splice(this.voteList.indexOf(vote), 1);
  }

}
