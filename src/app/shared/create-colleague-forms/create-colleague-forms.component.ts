import { Component } from '@angular/core';
import {CollegueService} from "../../service/collegue.service";
import {HttpClient} from "@angular/common/http";
import {CollegueComponent} from "../components/collegue/collegue.component";
import {ColleguePost} from "../models/colleguePost";
@Component({
  selector: 'tc-create-colleague-forms',
  templateUrl: './create-colleague-forms.component.html',
  styleUrls: ['./create-colleague-forms.component.scss']
})
export class CreateColleagueFormsComponent {
   newCollegue:ColleguePost={pseudo:"gher", last:"reth", first:"reth", photo: "https://iili.io/HECdmoF.th.png"};

  constructor(private collSrv:CollegueService) {
  }

  postColleague(){
    this.collSrv.postCollegue(this.newCollegue);
  }

}
