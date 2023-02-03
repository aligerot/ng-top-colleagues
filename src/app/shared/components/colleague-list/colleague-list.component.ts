import { Component } from '@angular/core';
import {Colleague} from "../../models/colleague";
import {CollegueComponent} from "../collegue/collegue.component";
@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss']
})
export class ColleagueListComponent {
  colleagueList:Array<Colleague> = [
    {pseudo : "vincent", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "antoine", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "antoine2", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "antoine3", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "antoine antoine", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "vincentoine", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "antiantoine", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "jean", score : 100, photo: "https://iili.io/Hc70A5G.png"},
    {pseudo : "jeantoine", score : 100, photo: "https://iili.io/Hc70A5G.png"}]

}
