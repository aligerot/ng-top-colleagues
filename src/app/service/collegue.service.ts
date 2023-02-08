import { HttpClient, HttpResponse } from "@angular/common/http";
import {Colleague} from "../shared/models/colleague";
import {Observable, Subscription} from "rxjs";
import {Injectable} from "@angular/core";
// (...)




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


  }}
