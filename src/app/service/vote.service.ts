import { HttpClient, HttpResponse } from "@angular/common/http";
import {Colleague} from "../shared/models/colleague";
import {Vote} from "../shared/models/vote";
import {Observable, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
// (...)




const Url_api="https://dev.cleverapps.io/api/v2/votes";
let VoteList:Array<Vote> =[];

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  // injection du service HTTP
  constructor(private http: HttpClient) {

  }


  getVoteByApi():Observable<Vote[]>{
    return this.http.get<Vote[]>(Url_api)

  }

}
