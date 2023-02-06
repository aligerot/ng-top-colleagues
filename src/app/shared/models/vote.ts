import {CollegueComponent} from "../components/collegue/collegue.component";
import {LikeHate} from "./like-hate";
import {Colleague} from "./colleague";

export interface Vote {
  collegue:Colleague
  vote:LikeHate

}
