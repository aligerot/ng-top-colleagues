import { HttpClient, HttpResponse } from "@angular/common/http";
import {Colleague} from "../shared/models/colleague";
import {Observable, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
import {CreateColleagueFormsComponent} from "../shared/create-colleague-forms/create-colleague-forms.component";
import {ColleguePost} from "../shared/models/colleguePost";




const Url_api="https://dev.cleverapps.io/api/v2/colleagues";
let CollegueList:Array<Colleague> =[];

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  // injection du service HTTP
  constructor(private http: HttpClient) {

  }


  getCollByApi():Observable<Colleague[]>{
   return this.http.get<Colleague[]>(Url_api)


  }

  postCollegue(newCollegue:ColleguePost){
    this.http.post(Url_api,newCollegue).subscribe();
  }

}
